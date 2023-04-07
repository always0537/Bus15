
export default class User {
  constructor(
    public _id: string | null,
    public realName: string | null,
    public lineName: string | null,
    public picture: string | null,
  ) {}
}