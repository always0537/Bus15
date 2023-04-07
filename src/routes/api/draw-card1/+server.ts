import type { RequestHandler } from './$types';
import { MongoDb_ConnectionString } from '$env/static/private';
import { MongoClient } from 'mongodb';
import DrawCard from '@Models/DrawCard';

const client = new MongoClient(MongoDb_ConnectionString);

export const POST: RequestHandler = async (e) => {

  let token = e.request.headers.get("authorization")

  await client.connect();
  let database = client.db("BusCards");

  //#region 身分驗證

  //#endregion
  client.close();
  //#region 抽卡
  let drawResult = await DrawCard(1);
  //#endregion
  return new Response(JSON.stringify(drawResult));
};


