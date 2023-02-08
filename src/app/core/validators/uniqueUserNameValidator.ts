import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AccountService } from "app/core/services/account.service";

export function uniqueUserNameValidator(
  _service: AccountService
): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    debugger;
    return _service.checkIfUserNameExists(control.value).pipe(
      map((res) => {
        debugger;
        if (res.emailExists) {
          return { uniqueEmail: true };
        }
        return null;
      }),
      catchError(() => of(null))
    );
  };
}
