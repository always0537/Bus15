import type { RequestHandler } from './$types';
import { MongoDb_ConnectionString } from '$env/static/private';

import { MongoClient } from 'mongodb';
import type CardDex from '../../../models/CardDex';
import type User from '../../../models/User';

const client = new MongoClient(MongoDb_ConnectionString);

export async function GET(): Promise<Response> {
    try {
        await client.connect();
        const database = client.db("BusCards");
        const cardDexes = database.collection<CardDex>("CardDex");
        const card = await cardDexes.findOne<CardDex>();

        return new Response(JSON.stringify(card), { status: 200 });
    }
    finally {
        client.close();
    }
};