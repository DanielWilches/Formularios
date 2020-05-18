import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    const ARRAYTEXT = Array.from(value);
    let mayus: string;
    for (let index = 0; index < ARRAYTEXT.length; index++) {
      const element = ARRAYTEXT[0].toUpperCase();
      mayus = element;
    }
    ARRAYTEXT.shift();
    return`${mayus}${ARRAYTEXT.join('')}`;
  }

}
