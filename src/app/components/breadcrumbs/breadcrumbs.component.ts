import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
  }

  breadcrumbsTitle = '';

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const course = this.coursesService.getById(+params.id);
      if (course) {
        this.breadcrumbsTitle = course.title;
      } else if (this.router.url === '/courses/new') {
        this.breadcrumbsTitle = 'New course';
      }
    });
  }

}
