export default class Queue<T> {
  private QueueLine: T[] = new Array();
  constructor() {

  }
  enqueue(item:T): void {
    this.QueueLine.push(item);
  }
  dequeue() : T | undefined{
    return this.QueueLine.shift();
  }
  tryPeek(): T | undefined {
    return this.QueueLine.length > 0 ? this.QueueLine[0] : undefined;
  }
}