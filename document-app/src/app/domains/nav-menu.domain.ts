import {BasicData, BasicDataList} from 'data-basic';
import {Menu} from './menu.domain';

export class NavMenu extends BasicData{
  Name: string;
  Children: Menu[];

  constructor(option: {
    Name?: string;
    Children?: Menu[];
  } = {}) {
    super();
    this.Name = option.Name || '';
    this.Children = option.Children || [];
  }
}

export class NavMenuList extends BasicDataList<NavMenu> {

  constructor(options: {
    _Items?: Array<NavMenu>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new NavMenu(item));
      }
    }
  }
}
