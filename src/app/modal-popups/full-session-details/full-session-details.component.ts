import { Component, OnInit } from '@angular/core';
import { TranslationService } from "../../core/services/transalation.service";

@Component({
  selector: 'app-full-session-details',
  templateUrl: './full-session-details.component.html',
  styleUrls: ['./full-session-details.component.scss']
})
export class FullSessionDetailsComponent implements OnInit {

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
