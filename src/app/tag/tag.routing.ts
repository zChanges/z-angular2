import { Routes, RouterModule }   from '@angular/router';
import { TagManageComponent }     from './tag-manage/tag-manage.component';




export const TagRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tagManage',
    pathMatch: 'full'
  },
  {
    path: 'tagManage',
    component: TagManageComponent
  }
];

