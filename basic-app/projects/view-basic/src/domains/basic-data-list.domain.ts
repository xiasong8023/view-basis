import {BasicData} from './basic-data.domain';

export class BasicDataList<T extends BasicData> extends BasicData{
  MaxID: number;
  Items: T[];

  constructor(option: {
    MaxID?: number;
    Items?: T[];
  } = {}) {
    super();
    this.MaxID = !option.MaxID ? 0: Number.parseFloat(option.MaxID.toString());
    this.Items = option.Items || [];
  }

  get count(): number{
    return this.Items.length;
  }

  get items(): T[]{
    return this.Items;
  }

  set items(data: T[]){
    this.Items = data;
  }

  get first(): T{
    return this.getItemByIndex(0);
  }

  set first(item: T){
    this.setItemByIndex(0, item);
  }

  get last(): T{
    return this.getItemByIndex(this.count - 1);
  }

  set last(item: T){
    this.setItemByIndex(this.count - 1, item);
  }

  getItemByIndex(index: number): T{
    return this.items[index];
  }

  setItemByIndex(index: number, item: T): BasicDataList<T>{
    item.indexOfList = index;
    this.items[index] = item;
    return this;
  }

  append(item: T): BasicDataList<T>{
    if(!item){
      return this;
    }
    this.items.unshift(item);
    this.resetIndex();
    return this;
  }

  resetIndex(start: number = 0): void{
    for (let i = start; i< this.count; i++) {
      this.items[i].indexOfList = i;
    }
  }

  clear(): void{
    this.items = [];
  }

  show(): void{
    for (const item of this.items){
      item.isShow = true;
    }
  }

  hide(): void{
    for (const item of this.items){
      item.isShow = false;
    }
  }

  filter(callback: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]{
    return this.items.filter(callback, thisArg)
  }

   map<U>(callback: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    return this.items.map(callback, thisArg);
  }

   some(callback: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    return this.items.some(callback, thisArg);
  }

   forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    return this.items.forEach(callback, thisArg);
  }
}
