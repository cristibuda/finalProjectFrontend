export class Item {
  private _id?:string;
  private _title:string;
  private _description:string = '';
  private _category:string = '';



  public constructor(title: string, description: string, category: string) {
    // ?? is null operator
    this._title = title ?? '';
    this._description = description ?? '';
    this._category = category ?? '';

  }

  get id(): string {
    return this._id ?? '';
  }

  set id(value: string) {
    this._id = value;
  }

  public get title() {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}
