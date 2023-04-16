import type { RequestHandler } from './$types';
import { MongoDb_ConnectionString, playerID } from '$env/static/private';
import { MongoClient } from 'mongodb';
import DrawCard from '@Models/DrawCard';
import type { QueueDrawCardReturnObj } from '@Models/DrawCard'
import type CardDex from '@Models/CardDex';

const client = new MongoClient(MongoDb_ConnectionString);

export const POST: RequestHandler = async (e) => {

  let token = e.request.headers.get("authorization")

  await client.connect();
  let database = client.db("BusCards");

  //#region 身分驗證

  //#endregion
  client.close();
  //#region 抽卡
  let drawResult = await DrawCard(playerID, 10);
  let returnObj = {
    ReturnValue: new Array()
  };
  if (drawResult.Success && drawResult.ReturnValue !== undefined) {
    returnObj.ReturnValue = drawResult.ReturnValue;
  }
  //#endregion
  return new Response(JSON.stringify(returnObj));
};

