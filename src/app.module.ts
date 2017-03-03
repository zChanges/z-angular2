
import { AppRouterModule }            from './app/app.configRouter';
import { HttpModule, RequestOptions } from '@angular/http';
import { NgModule, ApplicationRef }   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { AppComponent }               from './app/app.component';
import { FormsModule }                from '@angular/forms';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr'

//第三方插件
import {AgGridModule}                 from 'ag-grid-ng2/main';
//--ajax拦截器
import { provideInterceptorService } from 'ng2-interceptors';
import { configInterceptor }          from './config.Interceptor';


//Component
import { fromComponent }              from './app/from/from.component';
import { tableComponent }             from './app/table/table.component';
// import { GoodsTypeComponent }         from './app/goodsType/goodsType.component';
import { LoginComponent }             from './app/login/login.component';

//Service
import { RouteService }               from './app/routeService';
import { formService }                from './app/from/from.Service';
import { tableService }               from './app/table/table.Service';
import { GoodsTypeService }           from './app/goodsType/goodsTypeService';
import { loginService }               from './app/login/login.Service';



@NgModule({
  imports: [ 
      BrowserModule,
      AppRouterModule,
      FormsModule,
      HttpModule,
      AgGridModule.withComponents([
        tableComponent
      ])
  ],
  //当前模块的组件、指令和管道
  declarations: [ 
      AppComponent,
      fromComponent,
      tableComponent,
      LoginComponent
  ],
  //供应商
  providers: [ 
      RouteService,
      formService,
      tableService,
      GoodsTypeService,
      configInterceptor,
      provideInterceptorService([
        configInterceptor
      ]),
      loginService
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