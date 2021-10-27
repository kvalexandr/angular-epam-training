import { Course } from './../models/Course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], search: string = ''): Course[] {
    if(!search.trim()) {
      return courses;
    }

    return courses.filter(course => course.name.toLowerCase().includes(search.toLowerCase()));
  }


}
