import {FormControl} from "@angular/forms";

export class LengthValidator {
  static number(control: FormControl): { [key: string]: boolean } | null {
    if (!/^(0|[1-9]\d*)$/.test(control.value)) {
      return {notNumber: true}
    }

    return null;
  }
}
