import { formBase } from './form-base';
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class formControlService {
  constructor() { }

  toFormGroup(questions: formBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required 
          ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}