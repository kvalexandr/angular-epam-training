import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CourseInput} from "../../models/CourseInput";
import {Observable} from "rxjs";

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  // public title = 'HTML + CSS';
  // public createData = '01.10.2021';
  // public duration = 245;
  // public description = `Learn about where you can find course descriptions, what information they include, how they work, and details about descriptions for all courses offered during a particular semester.`
  initialValue: CourseInput = {
    title: '',
    description: '',
    create_data: new Date().toLocaleDateString('en-US'),
    duration: 0
  };
  title = 'New course';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const course = this.coursesService.getById(+params.id);
      if (course) {
        this.title = 'Edit course';
        this.initialValue = {
          title: course.title,
          description: course.description,
          create_data: new Date(course.create_data).toLocaleDateString('en-US'),
          duration: course.duration
        };
      } else if(this.router.url !== '/courses/new') {
        this.router.navigate(['/error']);
      }
    });
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

  public save() {
    this.coursesService.update(+this.route.snapshot.params['id'], this.initialValue);
    this.router.navigate(['/courses']);
  }

}
