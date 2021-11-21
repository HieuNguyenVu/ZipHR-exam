import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numWithCommas',
})
export class NumWithCommasPipe implements PipeTransform {
  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.numberWithCommas(Number(value));
  }
}
