import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { FormsModule }            from '@angular/forms';

import { articleRoutes }          from './article.routing';
import { ArticleListComponent }   from './articleList/articleList.component';
import { ArticleDetailComponent } from './articleDetail/articleDetail.component';


import { ArticleService } from './articleList/article.service';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  providers: [
    ArticleService
  ]
})
export class articleModule { }