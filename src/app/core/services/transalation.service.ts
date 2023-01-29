import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public language = new BehaviorSubject<string>('en');
  selectedLanguage: any;
  constructor(private http: HttpClient) {
      this.selectedLanguage = 'en';
      this.language.next(this.selectedLanguage);
      this.get();

      //This code block will be used for rtl
   /* this.language.subscribe((res: any) => {
      document.querySelector('html')?.setAttribute('lang', res);
      if (res == 'ar') {
        document.querySelector('html')?.setAttribute('dir', 'rtl');
      } else {
        document.querySelector('html')?.setAttribute('dir', 'ltr');
      }
      this.get();
    });*/
  }
  get() {
    return this.http.get(`assets/i18n/${this.language.value}.json`);
  }

  getLang() {
    return this.language.asObservable();
  }

  setLang(lang: string) {
    this.language.next(lang);
    this.get();
  }
}
