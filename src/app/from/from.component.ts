import { Component, OnInit } from '@angular/core';
import { formService } from './from.Service';

@Component({
    // moduleId: module.id,
    selector: 'my-from',
    templateUrl: './from.component.html'
})
export class fromComponent implements OnInit {
    userTypeList = [];
    userDetailList = [];
    myForm;
    from = {
        userName:"zChange",
        passWord:'541226',
        phone:'15162996236',
        userType:'5'
    };
    constructor(private formService:formService) { 
    }
    //组件生命周期钩子--执行初始化（激活时初始化）
    ngOnInit() { 
        this.userTypeList = this.formService.getuserType();
    }
    
    submitFrom():void{
        this.userDetailList.push(this.from)
        console.log(this.userDetailList)
    }
    
}