import {MongoDb_ConnectionString} from '$env/static/private';
import { MongoClient } from 'mongodb';
import type User from '../../../models/User';

const client = new MongoClient(MongoDb_ConnectionString);

export const POST = async (request: Request): Promise<Response> => {
    try{
        const body = await request.json();
        const lineId = body.lineId;

        await client.connect(); // Connect to the MongoDB cluster
        const database = client.db("BusCards"); // Specify the database name
        const users = database.collection<User>("Users"); // Specify the collection name
        const user = await users.findOne<User>({_id: lineId});

        return new Response(JSON.stringify(user), {status: (user != null) ? 200 : 404});
    }
    finally{
        await client.close();
    }
};