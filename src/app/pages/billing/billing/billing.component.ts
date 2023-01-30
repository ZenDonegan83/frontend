import { Component, OnInit } from '@angular/core';
import { TranslationService } from "../../../core/services/transalation.service";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  selectedLanguage: any = 'en';
  translation: any;
  constructor(private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.billing_history;
      });
    });
  }

}
