import {Component, OnInit} from '@angular/core';
import {CourseInput} from "../../models/CourseInput";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {Course} from "../../models/Course";
import * as moment from "moment";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  initialValue: CourseInput = {} as CourseInput;
  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.coursesService.getById(+params.id)
          .subscribe(course => {
            this.course = course;
            this.initialValue = {
              name: course.name,
              description: course.description,
              date: moment(course.date).format('YYYY-MM-DD'),
              length: course.length
            };
          });
      }
    );
  }

  public onSave(courseInput: CourseInput) {
    const id = +this.route.snapshot.params['id'];
    const course: Course = {
      ...this.course,
      ...courseInput,
      date: new Date(courseInput.date).toISOString()
    }

    this.coursesService.update(id, course).subscribe(course => {
      this.router.navigate(['/courses']);
    });
  }

}
