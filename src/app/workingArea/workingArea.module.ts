import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

//Component
import { fromComponent }              from '../from/from.component';



// import { GoodsTypeComponent }         from './app/goodsType/goodsType.component';
import { FeedbackComponent }          from '../feedback/feedback.component';
import { FormControlComponent }       from '../form-field/form-control.component';
import { MaterialModule }             from '@angular/material';


import { SidebarComponent }           from '../sidebar/sidebar.component';
import { TagComponent }               from '../tag/tag.component/tag.component';
import { WorkingAreaComponent }       from './workingArea.component';
import { workingRoutes }              from './workingAreaRouter';
import { SharpPipe }                  from './../utils/sharp.pipe';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(workingRoutes)
  ],
  declarations: [
      fromComponent,
      FeedbackComponent,
      FormControlComponent,
      SidebarComponent,
      TagComponent,
      WorkingAreaComponent,
      SharpPipe
  ]
})
export class WorkingAreaModule { }


