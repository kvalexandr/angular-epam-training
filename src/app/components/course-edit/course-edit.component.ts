import {Component, OnInit} from '@angular/core';
import {CourseInput} from "../../models/CourseInput";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {Course} from "../../models/Course";
import {DateTime} from "luxon";
import {map, switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  initialValue$!: Observable<Course>;
  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private loader: LoaderService
  ) {
  }

  ngOnInit(): void {
    this.loader.setLoad(true);
    this.initialValue$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.coursesService.getById(+params.id).pipe(
            map((course: Course) => {
              return {
                ...course,
                date: DateTime.fromISO(course.date).toFormat('dd/LL/yyyy'),
              }
            }),
            tap((course: Course) => {
              this.course = course;
              this.loader.setLoad(false);
            })
          );
        })
      );
  }

  public onSave(courseInput: CourseInput) {
    const id = +this.route.snapshot.params['id'];
    const course: Course = {
      ...this.course,
      ...courseInput,
      date: DateTime.fromFormat(courseInput.date, 'dd/LL/yyyy').toISO()
    }

    this.coursesService.update(id, course).subscribe(course => {
      this.router.navigate(['/courses']);
    });
  }

}
