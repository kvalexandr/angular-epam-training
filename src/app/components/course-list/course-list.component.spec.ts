import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderByPipe } from './../../pipes/order-by.pipe';

import { CourseListComponent } from './course-list.component';
import {By} from "@angular/platform-browser";

describe('CoursesListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message onclick loadMore', function () {
    const spy = spyOn(component, 'loadMore');
    fixture.debugElement.query(By.css('.course-more .btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

});
