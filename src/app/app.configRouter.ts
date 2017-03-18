import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fromComponent }        from './from/from.component';
import { tableComponent }       from './table/table.component';
import { LoginComponent }       from './login/login.component';
import { FeedbackComponent }    from './feedback/feedback.component';



const routes:Routes = [
  {
    path: '',
    redirectTo: 'article',
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
  },
  //文章列表
  {
    path: 'article',
    loadChildren:'./article/article.module#articleModule'
  },
  //问题反馈
  {
    path:'feedback',
    component:FeedbackComponent
  },
  // 标签
  {
    path:'tagManage',
    loadChildren:'./tag/tag.module#tagModule'
  }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
