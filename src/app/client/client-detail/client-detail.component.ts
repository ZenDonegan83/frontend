import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../core/services/transalation.service";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  selectedLanguage: any = 'en';
  translation: any;
  actions:any = [];
  artist_detail = [  {
    app_date: '18-11-2022',
    app_time : '2:30 Pm to 5:30 PM',
    duration: '3 Hours',
    app_fee : '$ 2000',
  },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    },
    {
      app_date: '18-11-2022',
      app_time : '2:30 Pm to 5:30 PM',
      duration: '3 Hours',
      app_fee : '$ 2000',

    }]
  constructor(private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.client_detail;
        this.actions = data.actions;
        console.log(this.actions);
      });
    });
  }

}
