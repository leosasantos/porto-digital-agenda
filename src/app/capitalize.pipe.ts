import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize'})​

export class CapitalizePipe implements PipeTransform {


  transform(value: any, args?: any): any {

    let result = '';

    for (const v of value.split(' ')) {

      result += this.capitalize(v) + ' ';

    }​

    return result;

  }

  private capitalize(value: string) {

    return value.substr(0, 1).toUpperCase() +

      value.substr(1).toLowerCase();

  }

}
