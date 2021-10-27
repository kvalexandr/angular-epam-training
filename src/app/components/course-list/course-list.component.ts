import {CoursesService} from './../../services/courses.service';
import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  page = 0;
  search = '';

  constructor(public coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.coursesService.getList()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  loadMore() {
    this.coursesService.getList(++this.page, this.search)
      .subscribe(courses => {
        this.courses = [...this.courses, ...courses];
      });
  }

  deleteCourse(id: number) {
    const isDelete = confirm("Do you really want to delete this course?");
    if (isDelete) {
      this.coursesService.remove(id).subscribe(() => {
        this.coursesService.getList()
          .subscribe(courses => {
            this.courses = courses;
          });
      });
    }
  }

  courseSearch(search: string) {
    this.page = 0;
    this.coursesService.getList(this.page, search).subscribe(courses => {
      this.courses = courses;
      this.search = search;
    })
  }

}
