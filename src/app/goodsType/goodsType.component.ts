import { Http } from '@angular/http';

import { GoodsTypeService } from './goodsTypeService';
import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-goodsType',
  templateUrl: './goodsType.component.html'
})
export class GoodsTypeComponent implements OnInit {
  queryC = { name:"" };
  goodsTypeList;
  name:string;
  remarks:string;
  
  constructor(private GoodsTypeService:GoodsTypeService){

  }
  ngOnInit() {
  }

  addUser():void{
    this.GoodsTypeService.add(this.name,this.remarks).subscribe(res=>{
      this.loadData();
      $("#myModal").modal("hide");
    });
  }

  queryFn():void{
    this.loadData();
  }


  loadData():void{
     this.GoodsTypeService.getList(this.queryC.name,0,10).subscribe(res=>{
          this.goodsTypeList = res.data.data;
          console.log(res)
      });
  }
}