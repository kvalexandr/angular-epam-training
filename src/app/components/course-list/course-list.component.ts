import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe]
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];
  private coursesList: Course[] = [];

  constructor(private filter: FilterPipe) {}

  ngOnInit(): void {
    this.courses = this.coursesList = [
      {
        id: 1,
        title: 'HTML + CSS',
        create_data: new Date(2021, 8, 20).toString(),
        duration: 30,
        topRated: true,
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
        title: 'Angular',
        create_data: new Date(2021, 7, 28).toString(),
        duration: 80,
        topRated: false,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details
        about
        various components of a course description. Course descriptions report information about a university or
        college's
        classes. They're published both in course catalogs that outline degree requirements and in course schedules that
        contain
        descriptions for all courses offered during a particular semester.`
      },
      {
        id: 3,
        title: 'Javascript begin',
        create_data: new Date(2021, 3, 9).toString(),
        duration: 120,
        topRated: true,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details
        about
        various components of a course description. Course descriptions report information about a university or
        college's
        classes. They're published both in course catalogs that outline degree requirements and in course schedules that
        contain
        descriptions for all courses offered during a particular semester.`
      },
      {
        id: 4,
        title: 'Javascript pro',
        create_data: new Date(2021, 8, 30).toString(),
        duration: 160,
        topRated: false,
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

  courseSearch(search: string) {
    this.courses = this.filter.transform(this.coursesList, search);
  }

}
