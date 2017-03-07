import { formBase } from './form-base';
export class Textareabox extends formBase<string> {
    controlType = 'textarea'
    rows:number;
    constructor(options={}){
        super(options)
        this.rows=options['rows'] || 1;
    }
}