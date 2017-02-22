import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fromComponent }        from './from/from.component';
import { tableComponent }       from './table/table.component';
import { GoodsTypeComponent }   from './goodsType/goodsType.component';


const routes:Routes = [
    {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
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
    component: GoodsTypeComponent
  }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
