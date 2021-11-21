import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numWithZeroPipe',
})
export class NumWithZeroPipe implements PipeTransform {
  numberWithZero(x: number) {
    return ('000' + x.toString()).slice(-3);
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.numberWithZero(Number(value));
  }
}
