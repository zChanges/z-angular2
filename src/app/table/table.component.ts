import { tableService } from './table.Service';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid/main";
/**
 * 问题  ag-grid 
 *      列表中按钮无用
 *      列表可用ts abstract 抽象类 公用重写
 */
@Component({
    selector: 'my-table',
    templateUrl: './table.component.html'
})
export class tableComponent implements OnInit {
    gridOptions:GridOptions;
    orderBy:number;
    asc:boolean;
    constructor(private tableService:tableService) {
        this.gridOptions = <GridOptions>{
            enableServerSideSorting: true, //启动后台排序
            columnDefs:  this.createColumnDefs(),//初始化列表
            datasource: this.dataSource,//获取数据
            onSelectionChanged: this.onSelectionChanged,  //选中后的所有数据
            suppressRowClickSelection: true,  //--禁用选中行
            onRowSelected:this.onRowSelected,//选中行的数据
        };
     }
    
    resizeFn(){
         this.gridOptions.api.sizeColumnsToFit();
    }


    ngOnInit() { }
    
    //初始化列表
    createColumnDefs() {
        return [
            {headerName: "#",suppressSizeToFit: true,checkboxSelection:true,width:25,uppressSorting: true,suppressMenu: true, pinned: true,
              headerCheckboxSelection: true,
              headerCheckboxSelectionFilteredOnly: true,
            },
            {headerName: "用户名称", field: "userName",suppressSizeToFit: true},//suppressSizeToFit--设置固定
            {headerName: "用户类别",field: "userType",cellStyle: (params)=>{
                if(params.value=='超级用户'){ return {color: 'red'};}else{ return null;};
            }},
            {headerName: "手机号码",field: "userPhone"},
            {headerName: "编辑",
                cellRenderer:(params)=>{
                     return '<button (click)="resizeFn(params)" [binding]="params">编辑</button>';
                }
            },
        ];
    }

    editTemplate(){
        return '<button (click)="resizeFn(data)" (bind)="data">编辑</button>';
    }


    //获取数据
    dataSource = {
        paginationPageSize: 1,
        overflowSize: 100,
        getRows: (params: any)=>{
            
            this.getSortingData(params.sortModel[0])
             console.log(params.sortModel)
            var rowData = this.getUserData();
            // var rowsThisPage = rowData.slice(params.startRow, params.endRow);
            // console.log(rowsThisPage)
            var lastRow = rowData.length;//总条数
            params.successCallback(rowData, lastRow);
            this.gridOptions.api.sizeColumnsToFit();//列平铺
        }
    }

    //获取详情
    getUserData=()=>{
        console.log(this.asc,this.orderBy)
        return this.tableService.getTableList();
    }

    //排序
    getSortingData(sortModel:{colId:string,sort:string}){
        if(!sortModel){
            this.asc = null;
            this.orderBy = null;
            this.getUserData();
        }else{
            let sortItem = sortModel;
            switch (sortItem.colId){
                case "userName": {
                    this.orderBy = 1;
                } break;
                case "userType": {
                    this.orderBy = 2;
                } break;
                case "userPhone": {
                    this.orderBy = 3;
                } break;
            }
            this.asc = sortModel.sort == "asc";
            this.getUserData();
        }
    }

    //选中后数据
    onSelectionChanged=(data)=>{
        let selectedRows  = this.gridOptions.api.getSelectedRows();
        console.log(selectedRows);
    }
    //选中的数据
    onRowSelected(event){
        var isChecked = event.node.selected;//是否选中
        var checkedData = event.node.data;//选中行的数据
        console.log(event)
    }
    
}
