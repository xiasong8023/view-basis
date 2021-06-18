import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentComponent} from './views/document/document.component';
import {ComponentComponent} from './views/component/component.component';
import {ReadonlyMarkdownComponent} from './components/readonly-markdown/readonly-markdown.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'document/started-quickly',
    pathMatch: 'full',
  },
  {
    path: 'document',
    component: DocumentComponent,
    children: [
      {
        path: 'started-quickly', component: ReadonlyMarkdownComponent,
      }
    ]
  },
  {
    path: 'component',
    component: ComponentComponent,
    children: [
      {
        path: 'button', component: ReadonlyMarkdownComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
