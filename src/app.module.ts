import { AppRouterModule } from './app/app.configRouter';
import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app/app.component';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr'


import { fromComponent }   from './app/from/from.component';
import { tableComponent }   from './app/table/table.component';




@NgModule({
  imports: [ 
      BrowserModule,
      AppRouterModule 
  ],
  //当前模块的组件、指令和管道
  declarations: [ 
      AppComponent,
      fromComponent,
      tableComponent
  ],
  //模块引导时应该引导的组件
  bootstrap:    [ AppComponent ]
})
// hmr config
export class AppModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store:any) {
    }
    hmrOnDestroy(store:any) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
        store.disposeOldHosts = createNewHosts(cmpLocation)
        removeNgStyles()
    }
    hmrAfterDestroy(store:any) {
        store.disposeOldHosts()
        delete store.disposeOldHosts
    }
}