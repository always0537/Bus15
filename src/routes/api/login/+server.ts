import {MongoDb_ConnectionString} from '$env/static/private';
import { MongoClient } from 'mongodb';
import type User from '../../../models/User';
import type LineIdToken from '@Models/LineIdToken';
import * as line from '../../../util/LineUtil';

const client = new MongoClient(MongoDb_ConnectionString);

export const GET = async ({url}): Promise<Response> => {
    const code = url.searchParams.get('code');
    const jwtFromLine = await line.GetJWTfromLineCode(code!);
    const lineIdToken = line.GetLineDecode(jwtFromLine) as LineIdToken;
    let result = {
        status: 400,
        message: "",
        user: null as User | null,
    };
    if(lineIdToken == null) return new Response(JSON.stringify({status: 400, message: "無效的憑證"}), {status: 400});
    try {        
        //check if user exists
        const user = await isUserRegistered(lineIdToken.sub);
        if (user == null) {
            let newBusUser: User = {
                _id: lineIdToken.sub,
                lineName: lineIdToken.name,
                picture: lineIdToken.picture,
                realName: "",
                lastDraw: 0,
                formatLastDraw: 0,
                leftDrawTimes: 0
            }
            //check if user is bus member
            const checkBusMember = await isBusMember(lineIdToken.name);
            if (checkBusMember.result) await addNewUser(newBusUser);
            result = (checkBusMember.result) ? { status: 200, message: "註冊成功", user: newBusUser }
                : { status: 400, message: "非巴士團成員", user: null };
        }
        else {
            result = { status: 200, message: "登入成功", user: user };
        }
    }
    catch (err) {
        console.log(err);
        result = { status: 500, message: "伺服器錯誤", user: null };
    }
    finally{
        return new Response(JSON.stringify(result), { status: result.status });
    }
};

export const POST = async ({request}): Promise<Response> => {
    const lineIdToken = await request.json();
    if(lineIdToken.sub == null) return new Response(JSON.stringify({status: 400, message: "無效的LineIdToken"}), { status: 400 });
    try {        
        //check if user exists
        const user = await isUserRegistered(lineIdToken.sub);
        if (user == null) {
            let newBusUser: User = {
                _id: lineIdToken.sub,
                lineName: lineIdToken.name,
                picture: lineIdToken.picture,
                realName: "",
                lastDraw: 0,
                formatLastDraw: 0,
                leftDrawTimes: 0
            }
            //check if user is bus member
            const checkBusMember = await isBusMember(lineIdToken.name);
            if (checkBusMember.result) await addNewUser(newBusUser);
            result = (checkBusMember.result) ? { status: 200, message: "註冊成功", user: newBusUser }
                : { status: 400, message: "非巴士團成員", user: null };
        }
        else {
            result = { status: 200, message: "登入成功", user: user };
        }
    }
    catch (err) {
        console.log(err);
        result = { status: 500, message: "伺服器錯誤", user: null };
    }
    finally{
        return new Response(JSON.stringify(result), { status: result.status });
    }
};

async function addNewUser(user: User): Promise<void> {
    try {
        await client.connect();
        const database = client.db("BusCards");
        const users = database.collection<User>("Users");
        await users.insertOne(user);
    }
    finally {
        client.close();
    }
}

async function isUserRegistered(sub: string): Promise<any>{
    try{
        await client.connect();
        const database = client.db("BusCards");
        return await database.collection<User>("Users").findOne({_id:sub});
    }
    finally{
        client.close();
    }
}

async function isBusMember(lineName: string): Promise<any> {
    let result = {result:false, name:null};
    try{
        await client.connect();
        const database = client.db("BusCards");
        const members = await database.collection("Members").find({});
        await members.forEach((member) => {
            member.keywords.forEach((keyword: string) => {
                if (lineName.includes(keyword)) {
                    result.result = true;
                    result.name = member.name;
                }
            });
        });
    }
    finally{
        client.close();
        return result;
    }
}