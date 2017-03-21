import { tagService } from './../tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-manage',
  templateUrl: './tag-manage.component.html',
  styleUrls: ['./tag-manage.component.css']
})
export class TagManageComponent implements OnInit {
  tagsList:any[];
  tagName:string;
  tagForm;
  constructor(private tagService:tagService) { }

  ngOnInit() {
    this.tagsList = this.tagService.getTag();
  }

  addTages(){
    this.tagsList.push({value:this.tagsList.length+1,text:this.tagName});
    this.tagName = "";
  }
  
  delTag(val){
    this.tagsList.forEach((item,index)=>{
        if(item.value===val){
          this.tagsList.splice(index,1);
          return false;
        }
    })
  }

}