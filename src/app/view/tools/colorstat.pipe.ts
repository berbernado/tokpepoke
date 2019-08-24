import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'colorstat'
})
export class ColorStatPipe implements PipeTransform {
  transform(items: number): any {
    if (items > 55) {
      return 'bg-success';
    } else if (items > 45 && items < 56)  {
      return 'bg-info';
    } else if (items < 46)  {
      return 'bg-warning';
    }
   }
}