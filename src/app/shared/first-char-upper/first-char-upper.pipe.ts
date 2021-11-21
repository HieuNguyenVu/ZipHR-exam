import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharUpperPipe',
})
export class FirstCharUpperPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const str = String(value);
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
