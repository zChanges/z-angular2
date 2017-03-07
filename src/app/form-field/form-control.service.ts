import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formBase }     from './form-base';



@Injectable()
export class formControlService {
  constructor() { }

  toFormGroup(formControl: formBase<any>[] ) {
    let group: any = {};

    formControl.forEach(forms => {
      group[forms.key] = forms.required 
          ? new FormControl(forms.value || '', Validators.required)
          : new FormControl(forms.value || '');
    });
    return new FormGroup(group);
  }
}