import { Routes, RouterModule }   from '@angular/router';

import { ArticleListComponent }   from './articleList/articleList.component';
import { ArticleDetailComponent } from './articleDetail/articleDetail.component';


export const articleRoutes: Routes = [
  { 
    path: '',
    component: ArticleListComponent 
  },
  {
    path: 'articleDetail/:arg', 
    component: ArticleDetailComponent 
  }
];

