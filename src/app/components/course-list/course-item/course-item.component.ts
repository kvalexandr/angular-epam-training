
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrashAlt, faCalendar, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
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
  public faStar = faStar;

  @Input() course: Course = {} as Course;
  @Output() onDelete = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCourse(elem: Course) {
    this.onDelete.emit(elem);
  }

}
