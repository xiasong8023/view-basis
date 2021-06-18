import { Component } from '@angular/core';
import {Navigation, NavigationList} from './domains/navigation.domain';
import {Router} from '@angular/router';
import {NavMenu, NavMenuList} from './domains/nav-menu.domain';
import {DocumentService} from '../services/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'web-app';
  selectedIndex = 0;
  navigation: Navigation = new Navigation();
  navMenuList: NavMenuList = new NavMenuList();
  navigationList: NavigationList = new NavigationList();

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {
    this.getNavigationList();
  }

  getNavigationList(): void{
    this.documentService.getNavigationList().then(res => {
      this.navigationList.items = res.map((item: Navigation) => new Navigation(item));
      this.navInit();
      this.navigation = this.navigationList.getItemByIndex(this.selectedIndex);
      this.getNavMenu();
    });
  }

  getNavMenu(): void{
    this.documentService.getNavMenu(this.navigation.Mark).then(res => {
      this.navMenuList.items = res.map((item: NavMenu) => new NavMenu(item));
    });
  }

  /**
   * 初始化
   */
  navInit(): void{
    const url = window.location.href;
    this.navigationList.items.forEach((item: Navigation, index: number) => {
      if (url.includes(item.Mark)){
        this.selectedIndex = index;
      }
    });
  }

  navSelect(navigation: Navigation, index: number): void {
    this.router.navigate([navigation.Router]).then(() => {
      this.selectedIndex = index;
    });
  }
}
