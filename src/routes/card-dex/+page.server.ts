import CardDex from '@Models/CardDex';
import CardRecord from '@Models/CardRecord';

import type {ObjectId} from "mongodb"
import type { PageServerLoad } from './$types';
import { json } from 'node:stream/consumers';

export const load = (async () => {
  let allCardList : CardDex[] = new Array();
  let myCardList: CardRecord[] = new Array();

  for (let i: number = 0; i < 50; i++) {
    let cardQty = i%3;

    let card = cardQty == 0 ? new CardDex(
      `??????`,
      0, 
      `?????????`, 
      ``,
      i,
      cardQty) :
      new CardDex(
      `卡片${i}`,
      0, 
      `卡片${i}描述`, 
      `/30581778_2162740227072882_842558015222579200_o.jpg`,
      i,
      cardQty)

    for(let q = 0 ; q < cardQty; q++){
      let cardRecord = new CardRecord(1, 0, i, 0 , 0);
      myCardList.push(cardRecord);
    }
    allCardList.push(card);
  }
    return {
    CardList : JSON.stringify(allCardList),
    MyCardList : JSON.stringify(myCardList)
  };
}) satisfies PageServerLoad;