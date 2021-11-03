import {CoursesService} from './../../services/courses.service';
import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/Course';
import {LoaderComponent} from "../loader/loader.component";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  page = 0;
  search = '';

  constructor(public coursesService: CoursesService, private loader: LoaderService) {
  }

  ngOnInit(): void {
    this.loader.setLoad(true);
    this.coursesService.getList()
      .subscribe(courses => {
        this.courses = courses;
        this.loader.setLoad(false);
      });
  }

  loadMore() {
    this.loader.setLoad(true);
    this.coursesService.getList(++this.page, this.search)
      .subscribe(courses => {
        this.courses = [...this.courses, ...courses];
        this.loader.setLoad(false);
      });
  }

  deleteCourse(id: number) {
    const isDelete = confirm("Do you really want to delete this course?");
    if (isDelete) {
      this.loader.setLoad(true);
      this.coursesService.remove(id).subscribe(() => {
        this.coursesService.getList()
          .subscribe(courses => {
            this.courses = courses;
            this.loader.setLoad(false);
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
