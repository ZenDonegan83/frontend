import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TranslationService} from "../../core/services/transalation.service";
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private fb :FormBuilder, private translationService:TranslationService) {

    this.registerForm = this.fb.group({
      username : ['' , Validators.required],
      firstName : ['', Validators.required],
      lastName : ['' , Validators.required],
      email :  ['' , [Validators.required]] ,
      password : ['' , Validators.required]
    });
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.registration;

      });
    });
  }

  ngOnInit(): void {
  }
  registerUser(registerForm :FormGroup){

  }
}
