import { formBase } from './../form-field/form-base';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Textbox } from './../form-field/textbox';
import { formControlService } from './../form-field/form-control.service';
import { flyIn } from './../../common/fly-in';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  animations:[flyIn]
})
export class FeedbackComponent implements OnInit {
  @Input() fields=[
      new Textbox({
        label: "用户名:",
        placeholder: "用户名",
        key:'userName'
      }), 
  ]
  form:FormGroup;
  constructor(private formControlService:formControlService) { }

  ngOnInit() {
    this.form = this.formControlService.toFormGroup(this.fields)
  }



}