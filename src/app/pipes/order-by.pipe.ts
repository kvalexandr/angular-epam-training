import { Course } from './../models/Course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], order: string = 'desc'): Course[] {
    const sortDirection: { [key: string]: number } = {
      asc: 1,
      desc: -1,
    };

    return [...courses].sort((a, b) => this.sortDate(a.date, b.date) * sortDirection[order]);
  }

  private sortDate(a: string | Date, b: string | Date) {
    return this.getNumFromDate(a) - this.getNumFromDate(b);
  }

  private getNumFromDate(date: string | Date) {
    return new Date(date).getTime();
  }

}
