import { AppRouterModule }           from './app/app.configRouter';
import { HttpModule }                from '@angular/http';
import { NgModule, ApplicationRef }  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { AppComponent }              from './app/app.component';
import { FormsModule }               from '@angular/forms';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr'

//第三方插件
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {AgGridModule}                 from 'ag-grid-ng2/main';

//Component
import { fromComponent }              from './app/from/from.component';
import { tableComponent }             from './app/table/table.component';
import { GoodsTypeComponent }         from './app/goodsType/goodsType.component';


//Service
import { formService }                from './app/from/from.Service';
import { tableService }               from './app/table/table.Service';





@NgModule({
  imports: [ 
      BrowserModule,
      AppRouterModule,
      FormsModule,
      HttpModule,
      AgGridModule.withComponents(
            [
                tableComponent,
                GoodsTypeComponent
            ]),
    //Ng2SmartTableModule 
  ],
  //当前模块的组件、指令和管道
  declarations: [ 
      AppComponent,
      fromComponent,
      tableComponent,
      GoodsTypeComponent
  ],
  //供应商
  providers: [ 
      formService,
      tableService 
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