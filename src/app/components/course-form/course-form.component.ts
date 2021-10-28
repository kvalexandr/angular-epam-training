import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CourseInput} from "../../models/CourseInput";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  @Input() initialValue!: CourseInput;
  @Output() courseSaveEvent = new EventEmitter<CourseInput>();

  constructor(private router: Router) {
  }

  changeLength(length: number) {
    this.initialValue.length = length;
  }

  changeDate(date: string) {
    this.initialValue.date = date;
  }

  onSave() {
    this.courseSaveEvent.emit(this.initialValue);
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}
