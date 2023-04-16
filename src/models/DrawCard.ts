import QueueService from "@Models/QueueService";
import { MongoDb_ConnectionString } from '$env/static/private';
import { MongoClient } from 'mongodb';
import type { TransactionOptions } from 'mongodb';

import CardRecord from "./CardRecord";
import type { CardDexWithRecordGroup, ICardRecordGroup } from "@Models/CardDex";
import { insert } from "svelte/internal";
import type CardDex from "@Models/CardDex";
import User from "@Models/User";

const client = new MongoClient(MongoDb_ConnectionString);

export class QueueDrawCardReturnObj<T>{
  public Success: boolean = false;
  public Message: string = "";
  public ReturnValue: T | undefined;
}

export default async function DrawCard(playerID: string, drawQty: number = 1, save: boolean = true): Promise<QueueDrawCardReturnObj<CardDex[] | undefined>> {

  let queue_draw = new QueueService<QueueDrawCardReturnObj<CardDex[] | undefined>>();
  let queueID = playerID + new Date().getTime().toString();
  let result = await queue_draw.joinAndWaitForResult(queueID, async (): Promise<QueueDrawCardReturnObj<CardDex[] | undefined>> => {

    let returnObj: QueueDrawCardReturnObj<CardDex[] | undefined> = new QueueDrawCardReturnObj();

    await client.connect();

    let db = client.db("BusCards");
    let userInfo: User | null = await db.collection<User>("Users").findOne({ "_id": playerID });

    if (userInfo === null) {
      returnObj.Message = "使用者名錯誤"
      client.close()
      return returnObj;
    }
    userInfo = new User(userInfo._id, userInfo.realName, userInfo.lineName, userInfo.picture, userInfo.lastDraw);

    if (userInfo.leftDrawTimes <= 0) {
      returnObj.Message = "已無抽卡次數"
      client.close()
      return returnObj;
    }

    let cardsInfo = await db.collection("CardDex").aggregate<CardDexWithRecordGroup>([{
      $lookup: {
        from: "CardRecord",
        localField: "_id",
        foreignField: "cardId",
        pipeline: [
          {
            $group: {
              _id: "$cardStatus",
              count: {
                $count: {},
              },
              // record: {
              //   $push: "$$ROOT",
              // },
            },
          },
        ],
        as: "cardRecordGroup",
      }
    },]).toArray();

    let getCardTotalQty = (cardList: ICardRecordGroup[] | undefined): number => {
      return cardList?.reduce((sum: number, recordGroup: any) => {
        if (recordGroup._id !== 9) {
          sum += recordGroup.count;
        }
        return sum;
      }, 0) ?? 0;
    }

    let getCardList: CardDexWithRecordGroup[] = new Array();

    for (let i = 0; i < (drawQty === 1 ? 1 : (userInfo.leftDrawTimes > drawQty) ? drawQty : userInfo.leftDrawTimes); i++) {
      let SSRCards = cardsInfo.filter(n => n.level === 3 && getCardTotalQty(n.cardRecordGroup) < n.limitQty);
      let SRCards = cardsInfo.filter(n => n.level === 2 && getCardTotalQty(n.cardRecordGroup) < n.limitQty);
      let RCards = cardsInfo.filter(n => n.level === 1);
      //70- R, 71-95 SR, 95+ SSR
      let getCardLevel = Math.floor(Math.random() * 100);
      let targetCardPool = getCardLevel >= 95 && SSRCards.length > 0 ? SSRCards :
        getCardLevel >= 70 && SRCards.length > 0 ? SRCards : RCards;

      let getCard: CardDexWithRecordGroup = targetCardPool[Math.floor(Math.random() * targetCardPool.length)];
      getCard.limitQty -= 1;
      getCardList.push(getCard);
    }
    if (!save) {
      returnObj.Success = true;
      returnObj.ReturnValue = getCardList;
      return returnObj;
    }
    const db_session = client.startSession();
    const db_transactionOptions: TransactionOptions = {
      readPreference: 'primary',
      readConcern: { level: 'local' },
      writeConcern: { w: 'majority' }
    };
    try {
      await db_session.withTransaction(async () => {
        let insertDocuments: any[] = getCardList.map(n => {
          return {
            playerId: playerID,
            cardStatus: 1,
            cardId: n._id,
            sellPrice: 0
          }
        })
        let insertResult = await db.collection("CardRecord").insertMany(insertDocuments, { session: db_session })
        if (!insertResult.acknowledged) {

          throw "卡片資料新增失敗";
        }
        let updateResult = await db.collection<User>("Users").updateOne({ "_id": playerID }, { $set: { "lastDraw": (userInfo!.formatLastDraw + getCardList.length) } }, { session: db_session })
        if (!updateResult.acknowledged) {
          throw "卡片資料新增失敗";
        }
      }, db_transactionOptions)
    } catch (error: any) {
      returnObj.Message = typeof error === "string" ? error : "資料寫入異常";
      return returnObj;
    }
    finally {
      await db_session.endSession();
      client.close();
    }
    returnObj.Success = true;
    returnObj.ReturnValue = getCardList;
    return returnObj;
  });
  let undefinedResult = new QueueDrawCardReturnObj<CardDex[]>();
  undefinedResult.Message = "抽卡錯誤";

  return result ?? undefinedResult;
}