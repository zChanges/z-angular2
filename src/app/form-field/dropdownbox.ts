import { formBase } from './form-base';
export class dropdownBox extends formBase<any>{
    controlType="dropdown";
    options:{key:string,value:string}[] = [];
    constructor(options:{}={}){
        super(options);
        this.options = options['options'] || [];
    }
}