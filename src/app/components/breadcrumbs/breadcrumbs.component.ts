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
      const id = +params.id;
      if (id) {
        this.coursesService.getById(+params.id)
          .subscribe(course => {
            this.breadcrumbsTitle = course.name;
          });
      }
    });

    if (this.router.url === '/courses/new') {
      this.breadcrumbsTitle = 'New course';
    }
  }

}
