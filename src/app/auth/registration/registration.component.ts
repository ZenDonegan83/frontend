import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "app/core/services/account.service";
import { uniqueEmailValidator } from "app/core/validators/uniqueEmailValidator";
import { TranslationService } from "../../core/services/transalation.service";
import { uniqueUserNameValidator } from "./../../core/validators/uniqueUserNameValidator";
import { RegisterDto } from "../../core/models/registerDto";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  selectedLanguage: any = "en";
  translation: any;
  model: RegisterDto = new RegisterDto();

  // private uniqueEmail() {
  //   return (ctrl: AbstractControl) => {
  //     // this is how you define a validator function
  //     let email = ctrl.value;
  //     return value // async validators return an Observable or Promise
  //       ? this.checkUniqueEmail(email).pipe(
  //           map((isUnique) => (isUnique ? null : { emailNotUnique: true }))
  //         ) // validators return null if they're valid, otherwise some object
  //       : of(null); // don't bother checking if no value
  //   };
  // }

  // private checkUniqueEmail(email) {
  //   // whatever your actual uniqueness checker is here,
  //   // must return Observable<boolean> in this example
  //   let params = new URLSearchParams();
  //   params.append("email", email);
  //   return this.http.get<boolean>("https://example.com/check-unique-email", {
  //     search: params,
  //   });
  // }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private translationService: TranslationService,
    private http: HttpClient,
    private _service: AccountService
  ) {
    this.registerForm = this.fb.group({
      userName: [
        "",
        [Validators.required],
        [uniqueUserNameValidator(_service)],
      ],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      telephone: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email],
        [uniqueEmailValidator(_service)],
      ],
      password: ["", Validators.required],
    });

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.registration;
      });
    });
  }

  ngOnInit(): void {
    debugger;
  }
  registerUser(registerForm: FormGroup) {
    debugger;
    this.submitted = true;
    if (!registerForm.invalid) {
      debugger;
      this.submitted = false;
      this._service.Register(this.model).subscribe((result) => {
        // if (result.IsSuccess) {
        //   this.loader.HideLoader();
        //   this.toastr.Success(result.Message);
        //   localStorage.setItem("email", this.model.Email);
        //   this._router.navigate(["/confirmemail"]);
        // } else {
        //   this.loader.HideLoader();
        //   this.toastr.Error("Error", result.ErrorMessage);
        // }
      });
    }
  }
}
