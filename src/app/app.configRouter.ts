import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fromComponent }        from './from/from.component';
import { tableComponent }       from './table/table.component';
import { LoginComponent }       from './login/login.component';





const routes:Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'from',
    component: fromComponent
  },
  {
    path: 'table',
    component: tableComponent
  },
  {
    path: 'goodsType',
    loadChildren: './goodsType/goodsType.module#goodsTypeModule'
  }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
