import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() value!: string;
  @Output() onChangeDate = new EventEmitter<string>();

  changeDate() {
    this.onChangeDate.emit(this.value);
  }
}
