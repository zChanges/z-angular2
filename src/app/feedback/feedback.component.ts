import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flyIn } from './../../common/fly-in';

import { formBase, dropdownBox, Textareabox, Textbox } from './../form-field';
import { formControlService } from './../form-field/form-control.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  animations:[flyIn]
})
export class FeedbackComponent implements OnInit {
  @Input() fields=[
      new Textbox({
        label: "标题",
        key:"title",
        required:true,
        placeholder: "标题",
      }), 
      new dropdownBox({
        label:'建议反馈',
        placeholder: "建议反馈",
        key:"rank",
        required:true,
        options: [
          {key: 1,  value: '建议反馈'},
          {key: 2,  value: 'bug'},
          {key: 3,  value: '大bug'},
          {key: 4, value: '超级bug'},
          {key: 5, value: '全TM是bug'}
        ]
      }),
      new Textareabox({
        label:'内容',
        key:"remark",
        rows:'6',
        placeholder:'请描述你遇到的问题'
      })
  ]
  form:FormGroup;
  formInfo:any;
  constructor(private formControlService:formControlService) { }

  ngOnInit() {
    this.form = this.formControlService.toFormGroup(this.fields)
  }

  submit(){
    console.log(this.form.value)
  }

}