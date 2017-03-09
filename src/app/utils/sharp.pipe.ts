import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SharpPipe'
})
export class SharpPipe implements PipeTransform {
  /**
   * class="{{6 | SharpPipe}}"
   */
  transform(value: number): any {
     return value>5?"text-danger":"" 
  }

}