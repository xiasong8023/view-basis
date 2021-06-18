import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './views/document/document.component';
import { ComponentComponent } from './views/component/component.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import zh from '@angular/common/locales/zh';
import {registerLocaleData} from '@angular/common';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import { ReadonlyMarkdownComponent } from './components/readonly-markdown/readonly-markdown.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {ViewBasicModule} from 'data-basic';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ComponentComponent,
    ReadonlyMarkdownComponent
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    MarkdownModule.forRoot(),
    ViewBasicModule.footRoot(),
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzTabsModule,
    NzMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
