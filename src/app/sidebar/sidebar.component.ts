import { Component, OnInit } from '@angular/core';
import { tagService } from './../tag/tag.service';
import {MdSnackBar} from '@angular/material';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject }  from 'rxjs/AsyncSubject';





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  tagData:any;
  searchSub:Subject<any> = new Subject<any>();
  search:string;
  name:string="1"
  constructor(private tagService:tagService,private snackBar:MdSnackBar) { 
  }

  ngOnInit() {
    this.tagData = this.tagService.getTag();
    this.searchSub
      .debounceTime(200)
      .subscribe(res=>{
        console.log(res)
      });

  }

  searchArticle(data){
    //父组件通过子组件的searchArticle = new EventEmitter()属性 
    //绑定searchArticle，来响应子组件的事件($event);  
    this.snackBar.open(data.text+" || "+data.value,"从子组件传递来的消息",{
      duration:500
    });
  }

  searchChange(){
    //通过next传递给observer
    this.searchSub.next(this.search);
  }



}