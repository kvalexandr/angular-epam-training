import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe, CoursesService]
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private filter: FilterPipe, public coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getList();
    this.courses = this.coursesService.courses;
  }

  loadMore() {
    console.log('load more...');
  }

  deleteCourse(elem: Course) {
    const isDelete = confirm("Do you really want to delete this course?");
    if  (isDelete) {
      this.coursesService.remove(elem);
      this.courses = this.coursesService.courses;
    }
  }

  courseSearch(search: string) {
    this.courses = this.filter.transform(this.coursesService.courses, search);
  }

}
