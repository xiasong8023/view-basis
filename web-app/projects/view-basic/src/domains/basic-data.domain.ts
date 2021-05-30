import {Util} from "../share";
import {Data} from "@angular/router";

export class BasicData {
  private readonly __property: BasicDataProperty
  constructor() {
    this.__property = new BasicDataProperty();
  }
  set isActive(value: boolean){
    this.__property.isActive = value;
  }
  get isActive(): boolean{
   return this.__property.isActive;
  }

  set isShow(value: boolean){
    this.__property.isShow = value;
  }
  get isShow(): boolean{
    return this.__property.isShow;
  }

  set isCheck(value: boolean){
    this.__property.isCheck = value;
  }
  get isCheck(): boolean{
    return this.__property.isCheck;
  }

  set isSelect(value: boolean){
    this.__property.isSelect = value;
  }
  get isSelect(): boolean{
    return this.__property.isSelect;
  }
  set isLoading(value: boolean){
    this.__property.isLoading = value;
  }
  get isLoading(): boolean{
    return this.__property.isLoading;
  }

  set indexOfList(value: number){
    this.__property.indexOfList = value;
  }
  get indexOfList(): number{
    return this.__property.indexOfList;
  }

  /**
   * 通过Key确认是否存在属性
   * @param key
   */
  public hasPropertyByKey(key: string): boolean{
    return this.hasOwnProperty(key);
  }

  /**
   * 通过key获取属性
   * @param key
   */
  public getPropertyByKey(key: string): any{
    if(this.hasPropertyByKey(key)){
      // @ts-ignore
      return this[key];
    }
    return;
  }

  /**
   * 通过属性名设置属性
   * @param key 属性名
   * @param value 属性值
   */
  public setPropertyByKey(key: string, value: any): void{
    // @ts-ignore
    this[key] = value;
  }

  /**
   * 属性遍历
   * @param callback 回调
   */
  public propertyForEach(callback: (key: string, value: any) => void): void{
    for (const property in this){
      if(this.hasPropertyByKey(property) && property !== '__property'){
        callback(property, this[property]);
      }
    }
  }

  /**
   * 获取所有属性
   */
  public propertyKeys(): string[]{
    const keys: string[] = [];
    for (const key in this){
      if(this.hasPropertyByKey(key) && key !== '__property'){
         keys.push(key);
      }
    }
    return keys;
  }

  /**
   * 时间格式
   * @param date
   */
  public formatData(date: Data | string = ''): Data | undefined{
    if(!date){
      return;
    }
    if(typeof date === "string"){
      date = date.replace(/T/gi, '');
      if (date === '0001-01-01 00:00:00') {
        return;
      }
      const dateArr = date.match(/\d+/g)!.map(item => {
        return Number.parseInt(item, 10);
      });
      date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3] || 0, dateArr[4] || 0, dateArr[5] || 0);
    }
    if (date.getTime() >= -2209017600000) {
      return date;
    }
    return;
  }
}


class BasicDataProperty{
  readonly uuid: string;
  isActive: boolean;
  isShow: boolean;
  isCheck: boolean;
  isSelect: boolean;
  isLoading: boolean;
  indexOfList: number;
  constructor(option: {
    readonly uuid?: string;
    isActive?: boolean;
    isShow?: boolean;
    isCheck?: boolean;
    isSelect?: boolean;
    isLoading?: boolean;
    indexOfList?: number;
  } = {}) {
    this.uuid = option.uuid || Util.uuid();
    this.isActive = !!option.isActive;
    this.isShow = !!option.isShow;
    this.isCheck = !!option.isCheck;
    this.isSelect = !!option.isSelect;
    this.isLoading = !!option.isLoading;
    this.indexOfList = !option.indexOfList? 0 : Number.parseFloat(option.indexOfList.toString());
  }
}
