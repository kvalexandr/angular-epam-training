import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputDurationComponent),
  multi: true
}

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class InputDurationComponent implements ControlValueAccessor {

  length!: number;

  private onChange = (value: any) => {}
  private onTouched = () => {}

  setValue(e: any) {
    this.length = e.target.value;
    this.onChange(this.length);
  }

  touchValue() {
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.length = obj;
  }
}
