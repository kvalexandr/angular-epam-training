import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

 type ClassStyleBorder = 'fresh' | 'upcoming' | 'old';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnChanges {
  @Input('appBorder') dateCourse: string = '';

  @HostBinding('class') classBorder: ClassStyleBorder = 'old';

  constructor() {}

  ngOnChanges() {
    this.setClassStyleBorder(this.dateCourse);
  }

  private setClassStyleBorder(date: string): void {
    const dateCreate = new Date(date);
    const dateNow = new Date();
    const dateNow14 = new Date(dateNow.getTime() - 14*24*60*60*1000);

    if (dateCreate > dateNow) {
      this.classBorder = 'upcoming';
    } else if (dateCreate < dateNow && dateCreate >= dateNow14) {
      this.classBorder = 'fresh';
    }
  }
}
