import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercharacter'
})
export class FiltercharactersPipe implements PipeTransform {

  transform(value: any[], arg1: string): any {
    return arg1 ? value.filter(item => item.name.toLowerCase().includes(arg1.toLowerCase())) : value;

  }

}
