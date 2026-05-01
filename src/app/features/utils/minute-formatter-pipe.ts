import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteFormatter',
})
export class MinuteFormatterPipe implements PipeTransform {
  transform(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const hoursString = hours > 0 ? `${hours}h` : '';
    const minutesString = minutes > 0 ? `${minutes}min` : '';

    return [hoursString, minutesString].filter((item) => item !== '').join(' ');
  }
}
