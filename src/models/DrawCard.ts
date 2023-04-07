import QueueService from "@Models/QueueService";
import { MongoDb_ConnectionString } from '$env/static/private';
import { MongoClient } from 'mongodb';
import CardRecord from "./CardRecord";

const client = new MongoClient(MongoDb_ConnectionString);
export default async function DrawCard(playerID: number): Promise<any> {
  let queue_draw = new QueueService<any, any>();
  let queueID = playerID + Date.now.toString();

  let result = await queue_draw.joinAndWaitForResult(queueID, async () => {
    await client.connect();

    let db = client.db("BusCards");
    let cardsInfo = await db.collection("CardDex").aggregate([{
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
        as: "cardRecord",
      }
    },]).toArray();
    let SSRCards = cardsInfo.filter(n => n.level === 3 && n.cardRecord.reduce((sum: number, recordGroup: any) => {
      if (recordGroup._id !== 9) {
        sum += recordGroup.count;
      }
      return sum;
    }, 0) < n.limitQty);
    let SRCards = cardsInfo.filter(n => n.level === 2 && n.cardRecord.reduce((sum: number, recordGroup: any) => {
      if (recordGroup._id !== 9) {
        sum += recordGroup.count;
      }
      return sum;
    }, 0) < n.limitQty);
    let RCards = cardsInfo.filter(n => n.level === 1);
    //70- R, 71-95 SR, 95+ SSR
    let getCardLevel = Math.floor(Math.random() * 100);
    console.log(getCardLevel)
    let targetCardPool = getCardLevel >= 95 && SSRCards.length > 0 ? SSRCards :
      getCardLevel >= 70 && SRCards.length > 0 ? SRCards : RCards;

    let getCard = targetCardPool[Math.floor(Math.random() * targetCardPool.length)];
    let insertResult = await db.collection("CardRecord").insertOne({ playerId: playerID, cardStatus: 1, cardId: getCard._id, sellPrice: 0 })
    client.close();

    return insertResult;
  });

  return result;
}