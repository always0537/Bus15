import Queue from '@Models/Queue'

export default class QueueService<T, O> {
  private static QueueLine: Queue<string> = new Queue<string>();
  constructor() {

  }

  async joinAndWaitForResult(id: string, doSome: func<O>) : Promise<O | undefined> {
    QueueService.QueueLine.enqueue(id);
    try{
      while (QueueService.QueueLine.tryPeek() !== id)
      {
        await new Promise((resolve) => setTimeout(resolve, 50))
      }
      let result = doSome();
      return result;  
    }catch{
      return undefined;
    }finally{
      do
      {
        let dequeueID : string | undefined = QueueService.QueueLine.dequeue();
        if (dequeueID === undefined || dequeueID === id)
        {
          break;
        }
        let enqueueID : string = dequeueID === undefined ? "" : dequeueID;
        if(enqueueID.length > 0){
          QueueService.QueueLine.enqueue(enqueueID);
        }
      } while (true);
    }
  }
}

interface func<O> {
  () : O | undefined;
}