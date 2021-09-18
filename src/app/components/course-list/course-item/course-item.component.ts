
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrashAlt, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../models/Course';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  public faPen = faPen;
  public faTrashAlt = faTrashAlt;
  public faCalendar = faCalendar;
  public faClock = faClock;

  @Input() course!: Course;
  @Output() onDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }

}
