import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'replaceLine'})
export class ReplaceLinePipe implements PipeTransform {
  transform(value: string, expr: any, arg2: string): any {
        if (!value)
            return value;

        return value.replace(new RegExp(expr, 'gi'), arg2);
    }
}