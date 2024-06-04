import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })

export class CapitalizePipe implements PipeTransform {


  transform(value: any, args?: any): any {

    let result = '';

    for (const v of value.split(' ')) {

      result += this.capitalize(v) + ' ';

    }

    return result;

  }

  private capitalize(value: string) {

    return value.substring(0, 1).toUpperCase() +

      value.substring(1).toLowerCase();

  }

}
