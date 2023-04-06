import type { ObjectId } from "mongodb";

export default class CardDex {
  constructor(
    public name?: string,
    public level?: number,
    public description?: string,
    public img?: string,
    public _id?: number | ObjectId,
    public qty: number = 0
  ) {

  }
}