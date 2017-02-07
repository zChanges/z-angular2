import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'my-from',
    template: 'my-from'
})
export class fromComponent implements OnInit {
    constructor() { }
    //组件生命周期钩子--执行初始化（激活时初始化）
    ngOnInit() { }
}