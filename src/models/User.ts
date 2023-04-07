
export default class User {
  constructor(
    public _id: string,
    public realName?: string,
    public lineName?: string,
    public picture?: string,
  ) {}
}