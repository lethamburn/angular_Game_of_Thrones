import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercharacters'
})
export class FiltercharactersPipe implements PipeTransform {

  transform(value: any[], arg1: string ): any {
    return value.filter(item => item.toLowerCase().includes(arg1.toLowerCase()));
  }

}
