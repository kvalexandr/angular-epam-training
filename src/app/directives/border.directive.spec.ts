import { BorderDirective } from './border.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";


@Component({
  template: '<div [appBorder]="date"></div>'
})
class TestComponent {
  public date = new Date(2021, 9, 28).toString();
}

describe('BorderDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, BorderDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should class change to upcoming', function () {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLDivElement | null = debugEl.querySelector('div');

    fixture.detectChanges();

    expect(div?.className).toBe('upcoming');
  });

  it('should create an instance', () => {
    const directive = new BorderDirective();
    expect(directive).toBeTruthy();
  });
});

