import CardDex from '@Models/CardDex';
import type CardRecord from '@Models/CardRecord';

import type { PageServerLoad } from './$types';
import { MongoDb_ConnectionString, playerID } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MongoDb_ConnectionString);

export const load = (async () => {

  let db = client.db("BusCards");
  let allCardList: CardDex[] = await db.collection("CardDex").find<CardDex>({}).toArray();
  let myCardList: CardRecord[] = await db.collection("CardRecord").find<CardRecord>({ playerId: playerID, cardStatus: { $ne: 9 } }).toArray();
  let showList: CardDex[] = new Array();
  for (let i: number = 0; i < allCardList.length; i++) {
    let cardQty = myCardList.filter(n => n.cardId === allCardList[i]._id).length;

    let card = cardQty == 0 ? new CardDex(
      `??????`,
      0,
      `?????????`,
      ``,
      i,
      0) :
      allCardList[i];
    card.qty = cardQty;

    showList.push(card);
  }
  return {
    CardList: JSON.stringify(showList),
    MyCardList: JSON.stringify(myCardList)
  };
}) satisfies PageServerLoad;