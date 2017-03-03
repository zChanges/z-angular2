import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsTypeComponent } from './goodsType.component';
import { FormsModule }                from '@angular/forms';

const routes: Routes = [
    { path: '', component: GoodsTypeComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [GoodsTypeComponent
]
})
export class goodsTypeModule { }