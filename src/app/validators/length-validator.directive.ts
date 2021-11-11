import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive} from "@angular/core";

export const identityLengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!/^(0|[1-9]\d*)$/.test(control.value) && control.value.length > 0) {
    return {notNumber: true}
  }

  return null;
};

@Directive({
  selector: '[appLengthValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LengthValidatorDirective, multi: true}]
})
export class LengthValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identityLengthValidator(control);
  }
}
