import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginDto } from "app/core/models/loginDto";
import { AccountService } from "app/core/services/account.service";
import { TranslationService } from "../../core/services/transalation.service";
import { ToastrService } from "ngx-toastr";
import { commonUtil } from "app/core/utils/commonUtil";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  selectedLanguage: any = "en";
  translation: any;
  model: LoginDto = new LoginDto();
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private translationService: TranslationService,
    private _service: AccountService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    if (commonUtil.isLoggedIn()) {
      this.route.navigate(["dashboard"]);
    }

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.login;
      });
    });
  }

  loginUser(loginForm: FormGroup) {
    this.submitted = true;
    if (!loginForm.invalid) {
      this.submitted = false;
      debugger;
      this._service.SignIn(this.model).subscribe((result) => {
        debugger;
        if (result && result.status == "SUCCESS") {
          commonUtil.setLoggedInSession(result.result);
          localStorage.setItem("token", loginForm.value.username);
          this.toastr.success("Login Success!");
          this.route.navigate(["dashboard"]);
        } else {
          this.toastr.error("username or password incorrect");
        }
      });
    }
  }
}
