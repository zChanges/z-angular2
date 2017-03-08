import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { FormsModule }            from '@angular/forms';

import { TagRoutes }              from './tag.routing';
import { TagComponent } from './tag.component/tag.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TagRoutes)
  ],
  declarations: [
    TagComponent
  ],
  providers: [
    TagComponent
  ]
})
export class tagModule { }