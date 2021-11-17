import {Component, ElementRef, forwardRef, Provider, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CoursesService} from "../../services/courses.service";
import {Authors} from "../../models/Authors";
import {Observable, of} from "rxjs";

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputAuthorsComponent),
  multi: true
}

@Component({
  selector: 'app-input-authors',
  templateUrl: './input-authors.component.html',
  styleUrls: ['./input-authors.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class InputAuthorsComponent implements ControlValueAccessor {

  authorsInput = '';
  authors: string[] = [];
  authorList$!: Observable<Authors[]>;

  constructor(private courseService: CoursesService) {
  }

  private onChange = (value: any) => {}
  private onTouched = () => {}

  getAuthors(e: any) {
    this.authorList$ = this.courseService.getAuthors(e.target.value);
  }

  deleteAuthor(i: number) {
    this.authors.splice(i, 1);
    this.onChange(this.authors);
  }

  chooseAuthor(name: string) {
    this.authors.push(name);

    this.authorsInput = '';
    this.authorList$ = of();
    this.onChange(this.authors);
  }

  touchValue() {
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.authors = obj;
  }
}
