import { Routes, RouterModule }   from '@angular/router';

import { ArticleListComponent }   from './articleList/articleList.component';
import { ArticleDetailComponent } from './articleDetail/articleDetail.component';


export const articleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'articleList',
    pathMatch: 'full'
  },
  { 
    path: 'articleList', 
    component: ArticleListComponent 
  },
  {
    path: 'articleDetail/:id', 
    component: ArticleDetailComponent 
  }
];

