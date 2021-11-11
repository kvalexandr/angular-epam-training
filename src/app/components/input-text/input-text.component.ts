import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true
}

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class InputTextComponent implements ControlValueAccessor {

  date!: string;

  private onChange = (value: any) => {}
  private onTouched = () => {}

  setValue(e: any) {
    this.date = e.target.value;
    this.onChange(this.date);
  }

  touchValue() {
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.date = obj;
  }
}
