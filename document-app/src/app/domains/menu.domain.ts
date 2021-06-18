import {BasicData, BasicDataList, Util} from 'data-basic';

export class Menu extends BasicData{
  readonly Id: string;
  Name: string;
  Router: string;
  ReadName: string;
  Mark: string;
  constructor(options: {
    Id?: string;
    Name?: string;
    Router?: string;
    ReadName?: string;
    Select?: boolean;
    Mark?: string;
  } = {}) {
    super();
    this.Id = Util.uuid();
    this.Name = options.Name || '';
    this.Router = options.Router || '';
    this.ReadName = options.ReadName || '';
    this.Mark = options.Mark || '';
  }
}
export class MenuList extends BasicDataList<Menu> {

  constructor(options: {
    _Items?: Array<Menu>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Menu(item));
      }
    }
  }
}
