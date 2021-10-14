import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationPipe } from './../../../pipes/duration.pipe';

import { CourseItemComponent } from './course-item.component';
import {By} from "@angular/platform-browser";

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, DurationPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description property', () => {
    let description = 'Test description text...';
    component.course.description = description;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.course-item__text'));
    let el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain(description);
  });

  it('should work Output onDelete emitter', function () {
    let fake = {
      id: 1,
      title: 'HTML + CSS',
      create_data: new Date(2021, 8, 20).toString(),
      duration: 30,
      topRated: true,
      description: `Test`
    };
    let result = {};
    component.onDelete.subscribe(v => result = v);
    component.deleteCourse(fake);
    expect(result).toBe(fake);
  });
});
