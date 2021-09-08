import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    const hours: number = Math.floor(duration >= 60 ? duration / 60 : 0);
    const minutes: number = duration - (hours * 60);

    return `${hours}h ${this.addZeroToNumber(minutes)}mm`;
  }

  private addZeroToNumber(num: number): string {
    return num > 10 ? num.toString() : `0${num}`;
  }

}
