import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { FormsModule }            from '@angular/forms';

import { TagRoutes }              from './tag.routing';

import { TagManageComponent }     from './tag-manage/tag-manage.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TagRoutes)
  ],
  declarations: [
    TagManageComponent
  ],
  providers: [

  ]
})
export class tagModule { }