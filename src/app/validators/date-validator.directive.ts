import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive} from "@angular/core";
import {DateTime} from "luxon";

export const identityDateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!DateTime.fromFormat(control.value, 'dd/LL/yyyy').isValid && control.value.length > 0) {
    return {incorrectDate: true}
  }

  return null;
};

@Directive({
  selector: '[appDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})
export class DateValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identityDateValidator(control);
  }
}
