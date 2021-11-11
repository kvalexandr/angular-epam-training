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

  errorMessages: { [key: string]: string } = {
    name: '',
    description: '',
    date: '',
    length: '',
    authors: ''
  };

  validationMessage: { [key: string]: { [key: string]: string } } = {
    name: {
      required: 'The name field cannot be empty',
      maxlength: `There must be a maximum of 50 characters`
    },
    description: {
      required: 'The description field cannot be empty',
      maxlength: `There must be a maximum of 500 characters`
    },
    date: {
      required: 'The date field cannot be empty',
      incorrectDate: `Incorrect date format`
    },
    length: {
      required: 'The length field cannot be empty',
      notNumber: `Not number`
    },
    authors: {
      required: 'The authors field cannot be empty',
    }
  };

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

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const check = control.invalid && control.dirty;
    if (check) {
      for (let key in control.errors) {
        this.errorMessages[controlName] = this.validationMessage[controlName][key];
      }
    }
    return check;
  }

  onSave() {
    this.courseSaveEvent.emit(this.form.value);
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}
