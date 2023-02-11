import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "app/core/services/account.service";
import { uniqueEmailValidator } from "app/core/validators/uniqueEmailValidator";
import { TranslationService } from "../../core/services/transalation.service";
import { uniqueUserNameValidator } from "./../../core/validators/uniqueUserNameValidator";
import { RegisterDto } from "../../core/models/registerDto";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
    private _service: AccountService,
    private toastr: ToastrService
  ) {
    this.registerForm = this.fb.group({
      username: [
        "",
        [Validators.required],
        // [uniqueUserNameValidator(_service)],
      ],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      telephone: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email],
        // [uniqueEmailValidator(_service)],
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

  ngOnInit(): void {}
  registerUser(registerForm: FormGroup) {
    this.submitted = true;
    if (!registerForm.invalid) {
      this.submitted = false;
      this._service.Register(this.model).subscribe((result) => {
        debugger;
        if (result) {
          if (result.status == "SUCCESS") {
            this.toastr.success("Register Successfully!");
            this.route.navigate(["login"]);
          } else if (result.status == "FAILED") {
            result.appsErrorMessages.forEach((s) => {
              this.toastr.error(s.errorMessage);
            });
          } else {
            this.toastr.error("Someting went wrong during register user");
          }
        } else {
          this.toastr.error("Someting went wrong during register user");
        }
      });
    }
  }
}
