/**
 * 定义一个对象模型来描述所有表单中所需要的参数
 * controlType---输入框类型
 * label      ---标题
 * 
 * 
 * 在此在派生多个新类，来特定一些输入框的种类（如文本、邮件、下拉）
 */
export class formBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  // order: number;
  controlType: string;
  placeholder: string;
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      // order?: number,
      controlType?: string
      placeholder?: string;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    // this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}
