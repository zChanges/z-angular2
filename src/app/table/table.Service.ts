import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class tableService {
    userList = [];
    constructor(private http:Http) {
        this.userList = [
            { id:'1', userType:'游客',userName:'游客',userPhone:'15162996236' },
            { id:'2', userType:'基本用户',userName:'基本用户',userPhone:'15262996236' },
            { id:'3', userType:'中级用户',userName:'中级用户',userPhone:'15362996236' },
            { id:'4', userType:'高级用户',userName:'高级用户',userPhone:'15462996236' },
            { id:'5', userType:'超级用户',userName:'超级用户',userPhone:'15562996236' },
            { id:'1', userType:'游客',userName:'游客',userPhone:'15162996236' },
            { id:'2', userType:'基本用户',userName:'基本用户',userPhone:'15262996236' },
            { id:'3', userType:'中级用户',userName:'中级用户',userPhone:'15362996236' },
            { id:'4', userType:'高级用户',userName:'高级用户',userPhone:'15462996236' },
            { id:'5', userType:'超级用户',userName:'超级用户',userPhone:'15562996236' },
            { id:'1', userType:'游客',userName:'游客',userPhone:'15162996236' },
            { id:'2', userType:'基本用户',userName:'基本用户',userPhone:'15262996236' },
            { id:'3', userType:'中级用户',userName:'中级用户',userPhone:'15362996236' },
            { id:'4', userType:'高级用户',userName:'高级用户',userPhone:'15462996236' },
            { id:'5', userType:'超级用户',userName:'超级用户',userPhone:'15562996236' },
            { id:'1', userType:'游客',userName:'游客',userPhone:'15162996236' },
            { id:'2', userType:'基本用户',userName:'基本用户',userPhone:'15262996236' },
            { id:'3', userType:'中级用户',userName:'中级用户',userPhone:'15362996236' },
            { id:'4', userType:'高级用户',userName:'高级用户',userPhone:'15462996236' },
            { id:'5', userType:'超级用户',userName:'超级用户',userPhone:'15562996236' }
        ]
     }

    getTableList(){
        return this.userList;
    }
}