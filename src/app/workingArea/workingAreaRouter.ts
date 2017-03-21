import { Routes, RouterModule } from '@angular/router';

import { fromComponent }        from '../from/from.component';
import { FeedbackComponent }    from '../feedback/feedback.component';
import { WorkingAreaComponent } from './workingArea.component';



export const workingRoutes:Routes = [
  {
    path: '',
    component: WorkingAreaComponent,
    children: [
	    	{ path: '',redirectTo:'article',pathMatch:'full'},
        {
          path: 'from',
          component: fromComponent
        },
        {
          path: 'goodsType',
          loadChildren: '../goodsType/goodsType.module#goodsTypeModule'
        },
        //文章列表
        {
          path: 'article',
          loadChildren:'../article/article.module#articleModule'
        },
        //问题反馈
        {
          path:'feedback',
          component:FeedbackComponent
        },
        // 标签
        {
          path:'tagManage',
          loadChildren:'../tag/tag.module#tagModule'
        }
	    ]
  }
]


