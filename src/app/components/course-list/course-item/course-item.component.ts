import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCalendar, faClock, faPen, faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Course} from '../../../models/Course';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  public faPen = faPen;
  public faTrashAlt = faTrashAlt;
  public faCalendar = faCalendar;
  public faClock = faClock;
  public faStar = faStar;

  @Input() course: Course = {} as Course;
  @Output() onDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCourse(id: number) {
    this.onDelete.emit(id);
  }

}
