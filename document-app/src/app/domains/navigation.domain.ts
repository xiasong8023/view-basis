import {BasicData, BasicDataList, Util} from 'data-basic';

export class Navigation extends BasicData{
  readonly Id: string;
  Name: string;
  Mark: string;
  Router: string;
  constructor(options: {
    Id?: string;
    Name?: string;
    Mark?: string;
    Router?: string;
  } = {}) {
    super();
    this.Id = Util.uuid();
    this.Name = options.Name || '';
    this.Router = options.Router || '';
    this.Mark = options.Mark || '';
  }
}
export class NavigationList extends BasicDataList<Navigation> {

  constructor(options: {
    _Items?: Array<Navigation>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Navigation(item));
      }
    }
  }
}

