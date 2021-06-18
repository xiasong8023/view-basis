import {BasicData} from './basic-data.domain';
import {Util} from '../share';

export class DynamicClass extends BasicData{
  [key: string]: any;

  constructor(option: {
    [key: string]: any;
  } = {}) {
    super();
    for (const key in option){
      if (option.hasOwnProperty(key)){
        this[key] = Util.deepClone(option[key]);
      }
    }
  }
}
