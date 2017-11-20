
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

  // just for the admin component
  public logItems(){
    console.group('admin component');
    console.log(this.items);
    console.groupEnd();
  }
}

