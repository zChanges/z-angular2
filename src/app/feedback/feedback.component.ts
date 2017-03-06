import { formBase } from './../form-field/form-base';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Textbox } from './../form-field/textbox';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Input() fields=[
      new Textbox({
      label: "用户名:",
      placeholder: "用户名"
    }), 
  ]
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields)
  }

  toFormGroup(fields: formBase<any>[]) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

}