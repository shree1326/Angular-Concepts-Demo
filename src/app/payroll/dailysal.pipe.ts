import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dailysal'
})

export class DailySalPipe implements PipeTransform{
  transform(value: number, multiply: string): number { 
      let mul = parseFloat(multiply); 
      return mul * value 
   }
}
