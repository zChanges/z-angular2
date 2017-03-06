import { formControlService } from './form-control.service';
import { formBase } from './form-base';
import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-control',
    templateUrl: 'form-control.component.html'
})
export class FormControlComponent{
    @Input() field: formBase<any>;
    @Input() form: FormGroup;

    constructor() {

     }

}