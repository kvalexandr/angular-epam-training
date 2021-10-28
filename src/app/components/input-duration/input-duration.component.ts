import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss']
})
export class InputDurationComponent {

  @Input() value!: number;
  @Output() onChangeLength = new EventEmitter<number>();

  changeLength() {
    this.onChangeLength.emit(this.value);
  }
}
