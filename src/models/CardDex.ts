import type { ObjectId } from "mongodb";

export default class CardDex {
  public qty: number = 0;
  public displayType: $displayType = "back";
  constructor(
    public name?: string,
    public level?: number,
    public description?: string,
    public img?: string,
    public _id?: number | ObjectId,
    public limitQty: number = 0
  ) {
  }
}
export type $displayType = "simple" | "detail" | "back";

export class CardDexWithRecordGroup extends CardDex {
  constructor(
    name?: string,
    level?: number,
    description?: string,
    img?: string,
    _id?: number | ObjectId,
    limitQty?: number,
    public cardRecordGroup?: ICardRecordGroup[]
  ) {
    super(name, level, description, img, _id, limitQty);
  }
}

export interface ICardRecordGroup {
  count: number,
  cardStatus: number,
}