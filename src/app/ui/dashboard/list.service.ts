
export class ListService {

  private _items: any[];

  constructor() {
    this._items = []
  }

  public get items(): any[] {
    return this._items;
  }

  public addItem(title: string) {
    this._items.push({ title })
  }
}