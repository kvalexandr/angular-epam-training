import {Component} from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {Router} from "@angular/router";
import {CourseInput} from "../../models/CourseInput";
import {Course} from "../../models/Course";
import {DateTime} from "luxon";

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent {

  initialValue: CourseInput = {
    name: '',
    description: '',
    date: '',
    length: 0,
    authors: []
  };

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) {
  }

  public onSave(courseInput: CourseInput) {
    const course: Course = {
      ...courseInput,
      id: Date.now(),
      isTopRated: false,
      date: DateTime.fromFormat(courseInput.date, 'dd/LL/yyyy').toISO()
    }

    this.coursesService.create(course).subscribe((course) => {
      this.router.navigate(['/courses']);
    });
  }

}
