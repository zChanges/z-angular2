import { Component, OnInit } from '@angular/core';
import { GridOptions }       from "ag-grid/main";

@Component({
  selector: 'app-goodsType',
  templateUrl: './goodsType.component.html'
})
export class GoodsTypeComponent implements OnInit {
  gridOptions:GridOptions;
  constructor() { 
    this.gridOptions = <GridOptions>{
        suppressSorting:true,//禁用排序
        columnDefs:  this.createColumnDefs(),//初始化列表
        datasource: this.dataSource,//获取数据
        // onSelectionChanged: this.onSelectionChanged,  //选中后的所有数据
        suppressRowClickSelection: true,  //--禁用选中行
    };
  }

  ngOnInit() {
  }

  //初始化列表
  createColumnDefs() {
        return [
            {headerName: "序号", field: "index",suppressSizeToFit: true},//suppressSizeToFit--设置固定
            {headerName: "分类名称",field: "name"},
            {headerName: "添加时间",field: "creationTime"},
            {headerName: "编辑",
                cellRenderer:(params)=>{
                     return '<button (click)="resizeFn(params)" [binding]="params">编辑</button>';
                }
            },
        ];
    }

    //获取数据
    dataSource = {
        paginationPageSize: 1,
        overflowSize: 100,
        getRows: (params: any)=>{
             console.log(params.sortModel)
            var rowData =[];
            // var rowsThisPage = rowData.slice(params.startRow, params.endRow);
            // console.log(rowsThisPage)
            var lastRow = rowData.length;//总条数
            params.successCallback(rowData, lastRow);
            this.gridOptions.api.sizeColumnsToFit();//列平铺
        }
    }

}