import Queue from '@Models/Queue'
import type CardDex from './CardDex';

export default class QueueService<O> {
  private static QueueLine: Queue<string> = new Queue<string>();
  constructor() {

  }

  async joinAndWaitForResult(id: string, doSome: func<O>): Promise<O | undefined> {
    QueueService.QueueLine.enqueue(id);
    try {
      while (QueueService.QueueLine.tryPeek() !== id) {
        await new Promise((resolve) => setTimeout(resolve, 20))
      }
      let result = await doSome();
      return result;
    }
    catch {
      return undefined;
    }
    finally {
      do {
        let dequeueID: string = QueueService.QueueLine.dequeue() ?? "";
        if (dequeueID.length === 0 || dequeueID === id) {
          break;
        }
        QueueService.QueueLine.enqueue(dequeueID);
      } while (true);
    }
  }
}

interface func<O> {
  (): Promise<O | undefined>;
}
