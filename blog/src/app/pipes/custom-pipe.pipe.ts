import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [x] = args;
    return value *x;
  }

}
