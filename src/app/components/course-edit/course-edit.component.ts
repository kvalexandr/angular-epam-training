import {Component, OnInit} from '@angular/core';
import {CourseInput} from "../../models/CourseInput";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {Course} from "../../models/Course";
import {DateTime} from "luxon";
import {switchMap} from "rxjs/operators";
import {Subject} from "rxjs";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  initialValue$: Subject<CourseInput> = new Subject<CourseInput>();
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
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.coursesService.getById(+params.id);
        })
      )
      .subscribe((course: Course) => {
        this.course = course;
        this.initialValue$.next({
          name: course.name,
          description: course.description,
          date: DateTime.fromISO(course.date).toFormat('dd/LL/yyyy'),
          length: course.length,
          authors: course.authors
        });
        this.loader.setLoad(false);
      });
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
