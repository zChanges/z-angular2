import { Injectable } from '@angular/core';
@Injectable()
export class formService {
    constructor() { }
    getuserType(){
        return [
            { id:'1', type:'游客' },
            { id:'2', type:'基本用户' },
            { id:'3', type:'中级用户' },
            { id:'4', type:'高级用户' },
            { id:'5', type:'超级用户' }
        ]
    }
}