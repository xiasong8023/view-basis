export class HttpParam{
  map: Map<string, any> = new Map<string, any>();

  constructor(option: Partial<HttpParam> = {}) {
    this.map = option.map || new Map<string, any>();
  }

  has(name: string): boolean{
    return this.map.has(name);
  }

  get(name: string): any{
    return this.map.get(name.toLowerCase()) || null;
  }

  keys(): any{
    return this.map.keys();
  }

  append(name: string, value: any): HttpParam{
    this.map.set(name, value);
    return new HttpParam({map: this.map});
  }

  set(name: string, value: any): void{
    this.map.set(name, value);
  }

  delete(name: string): void{
    this.map.delete(name);
  }
}
