export class HttpParam{
  map: Map<string, any> = new Map<string, any>();

  constructor(option: {
    map?: Map<string, any>
  } = {}) {
    this.map = option.map || new Map<string, any>();
  }
  has(name: string){
    return this.map.has(name);
  }

  get(name: string){
    return this.map.get(name.toLowerCase()) || null;
  }

  keys(){
    return this.map.keys();
  }

  append(name: string, value: any): HttpParam{
    this.map.set(name, value);
    return new HttpParam({map: this.map});
  }

  set(name: string, value: any){
    this.map.set(name, value);
  }

  delete(name: string){
    this.map.delete(name);
  }
}
