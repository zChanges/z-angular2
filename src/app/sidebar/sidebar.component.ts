import { Component, OnInit } from '@angular/core';
import { tagService } from './../tag/tag.service';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  tagData:any;
  constructor(private tagService:tagService,private snackBar:MdSnackBar) { 

  }

  ngOnInit() {
    this.tagData = this.tagService.getTag();
  }

  searchArticle(data){
    //父组件通过子组件的searchArticle = new EventEmitter()属性 
    //绑定searchArticle，来响应子组件的事件($event);
    this.snackBar.open(data.text+" || "+data.value,"从子组件传递来的消息",{
      duration:500
    });
  }

}