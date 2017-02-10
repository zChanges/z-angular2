import { Component, OnInit } from '@angular/core';
import { formService } from './from.Service';

@Component({
    // moduleId: module.id,
    selector: 'my-from',
    templateUrl: './from.component.html'
})
export class fromComponent implements OnInit {
    userTypeList = [];
    myForm;
    from = {
        userName:"",
        passWord:'',
        userType:'5'
    };
    constructor(private formService:formService) { 
    }
    //组件生命周期钩子--执行初始化（激活时初始化）
    ngOnInit() { 
        this.userTypeList = this.formService.getuserType();
    }
    
    submitFrom():void{
        console.log(this.myForm)
    }
    
}