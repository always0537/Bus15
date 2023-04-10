import type { RequestHandler } from './$types';
import { MongoDb_ConnectionString, JWT_secret } from '$env/static/private';
import { MongoClient } from 'mongodb';
import type User from '@Models/User';
import * as JWT from 'jsonwebtoken';

const client = new MongoClient(MongoDb_ConnectionString);

export const GET: RequestHandler = async () => {
    try{
        await client.connect();
        const database = client.db('BusCards');
        const allUsers = await database.collection<User>('Users').find({}).toArray();
        return new Response(JSON.stringify(allUsers), { status: 200 });
    }
    catch{
        return new Response(JSON.stringify({status: 500, message: "伺服器錯誤"}), { status: 500 });
    }
    finally{
         client.close();
    }
};

export const POST: RequestHandler = async ({request}) => {
    try{
        const loginId = (await request.json())._id;
        await client.connect();
        const database = client.db('BusCards');
        const loginUser = await database.collection<User>('Users').findOne({_id: loginId});
        //return json web token
        if(loginUser){
            const token = JWT.sign(loginUser, JWT_secret);
            return new Response(JSON.stringify({token: token}), { status: 200 });
        }
        else{
            return new Response(JSON.stringify({message: "無此使用者"}), { status: 400 });
        }
    }
    catch (err) {
        return new Response(JSON.stringify({message: err}), { status: 500 });
    }
    finally{
         client.close();
    }
}