import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../core/services/transalation.service";


@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent implements OnInit {
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.appointment_detail;
      });
    });
  }

}
