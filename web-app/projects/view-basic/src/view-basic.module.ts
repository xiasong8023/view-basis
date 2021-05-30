import {ModuleWithProviders, NgModule} from '@angular/core';

export * from './share';
export * from './domains';
export * from './services'
@NgModule({
  imports: [
  ],
  exports: [
  ]
})
export class ViewBasicModule {
  static footRoot(): ModuleWithProviders<ViewBasicModule>{
    return{
      ngModule:ViewBasicModule
    }
  }
}
