import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../../core/services/transalation.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedLanguage: any = 'en';
  translation: any = [];
  constructor(private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.profile;

      });
    });
  }

}
