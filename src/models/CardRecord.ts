import type { ObjectId } from "mongodb";

export default class CardRecord {
    constructor(
        public playerId?: number, 
        public cardStatus?: number, 
        public cardId?: number, 
        public sellPrice?: number, 
        public _id?: number | ObjectId) {}
}