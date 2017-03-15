import { Component, OnInit } from '@angular/core';
import { tagService } from './../tag/tag.service';
import {MdSnackBar} from '@angular/material';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';






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

      // var source = Observable.create((observer)=>{
      //     console.log(`source was called`);
      //     observer.next(1);
      //     observer.next(2);
      // });
      // source.subscribe((v) => console.log('observerA: ' + v));
      // source.subscribe((v) => console.log('observerB: ' + v));

  

      var source = Observable.create((o)=>{
          console.log(`source was called`);
          o.next(1);
          o.next(2);
      });
      var subject = new Subject();
      var multicasted = source.multicast(subject).refCount();

      multicasted.subscribe((v) => console.log('observerA: ' + v));
      multicasted.subscribe((v) => console.log('observerB: ' + v));
      multicasted.connect();
      
      // 1 1 2 2




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