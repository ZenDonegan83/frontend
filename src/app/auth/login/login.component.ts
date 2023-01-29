import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {TranslationService} from "../../core/services/transalation.service";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private fb :FormBuilder , private route :Router, private translationService:TranslationService) {
    this.loginForm = this.fb.group({
      username : ['' , Validators.required],
      password : ['' , Validators.required],
    });

  }

  ngOnInit(): void {

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.login;

      });
    });
  }

  loginUser(loginForm:FormGroup){

   localStorage.setItem('token' , loginForm.value.username);
   this.route.navigate(['dashboard']);


  }

}
