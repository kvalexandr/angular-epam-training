import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Course 1',
        create_data: new Date().toString(),
        duration: 30,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details
        about
        various components of a course description. Course descriptions report information about a university or
        college's
        classes. They're published both in course catalogs that outline degree requirements and in course schedules that
        contain
        descriptions for all courses offered during a particular semester.`
      },
      {
        id: 2,
        title: 'Course 2',
        create_data: new Date().toString(),
        duration: 80,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details
        about
        various components of a course description. Course descriptions report information about a university or
        college's
        classes. They're published both in course catalogs that outline degree requirements and in course schedules that
        contain
        descriptions for all courses offered during a particular semester.`
      }
    ];
  }

  loadMore() {
    console.log('load more...');
  }

  deleteCourse(id: number) {
    console.log('Course id: ', id);
  }

}
