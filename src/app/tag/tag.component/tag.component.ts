import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent{
  @Input() tag;
  @Output() searchArticle = new EventEmitter();
  
  constructor() {}
  // constructor(private snackBar:MdSnackBar) {}
  
  transmit(data){
    //通过子组件emit(向上发送)
    this.searchArticle.emit(data);
  }
  

}