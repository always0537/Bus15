import { DrawLimitPerDay } from "$env/static/private";

export default class User {
  constructor(
    public _id: string | null,
    public realName: string | null,
    public lineName: string | null,
    public picture: string | null,
    public lastDraw: number = 0,
  ) {
  }

  public get formatLastDraw() {
    let timeNow: Date = new Date();
    let lastDraw = this.lastDraw;
    let today: number = Number(timeNow.getFullYear().toString().substring(2, 4) + (timeNow.getMonth() + 1).toString().padStart(2, "0") + timeNow.getDate().toString().padStart(2, "0")) * 100;
    return lastDraw < today ? today : lastDraw;
  }
  public get leftDrawTimes() {
    let timeNow: Date = new Date();
    let today: number = Number(timeNow.getFullYear().toString().substring(2, 4) + (timeNow.getMonth() + 1).toString().padStart(2, "0") + timeNow.getDate().toString().padStart(2, "0")) * 100;
    return today + Number(DrawLimitPerDay) - this.formatLastDraw;
  }
}