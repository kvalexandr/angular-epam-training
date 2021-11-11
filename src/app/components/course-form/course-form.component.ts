import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseInput} from "../../models/CourseInput";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() initialValue!: CourseInput;
  @Output() courseSaveEvent = new EventEmitter<CourseInput>();

  form!: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.initialValue.name, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(this.initialValue.description, [Validators.required, Validators.maxLength(500)]),
      date: new FormControl(this.initialValue.date, [Validators.required]),
      length: new FormControl(this.initialValue.length, [Validators.required]),
      authors: new FormControl(this.initialValue.authors, [Validators.required])
    });
  }

  onSave() {
    this.courseSaveEvent.emit(this.form.value);
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}
