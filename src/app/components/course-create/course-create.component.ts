import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {Course} from "../../models/Course";

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  public title = 'HTML + CSS';
  public createData = '01.10.2021';
  public duration = 245;
  public description = `Learn about where you can find course descriptions, what information they include, how they work, and details about descriptions for all courses offered during a particular semester.`

  constructor() { }

  ngOnInit(): void {
  }

  public cancel() {
    console.log('cancel');
  }

  public save() {
    console.log('save');
  }

}
