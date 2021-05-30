export class Util{

  public static uuid(): string{
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

  /**
   * 深克隆
   * @param cloneObject // 克隆对象
   * @param excludeProperty // 排除属性
   */
  public static deepClone(cloneObject: any, ...excludeProperty: string[]): any{
    let storage;
    let key;
    if(cloneObject instanceof Array){
      storage = [];
      for (key = 0; key < cloneObject.length; key++){
        storage.push(cloneObject[key], ...excludeProperty);
      }
      return storage;
    } else if(cloneObject === null){
      return cloneObject;
    }else if(cloneObject instanceof Object){
      storage = {};
      for (key in cloneObject){
        if(cloneObject.hasOwnProperty(key) && !excludeProperty?.includes(key)){
          // @ts-ignore
          storage[key] = this.deepClone(cloneObject[key], ...excludeProperty);
        }
      }
      return storage;
    }else{
      return cloneObject;
    }
  }


  public static addUrlParam(url: string, param: string): string{
    if(!param){
      return url;
    }
    return `${url}${(url.indexOf('?') >= 0) ? '&' : '?'}${param}`;
  }

}
