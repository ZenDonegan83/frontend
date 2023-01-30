import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../../core/services/transalation.service";
import {ApiService} from "../../../core/services/api.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-artist-session-history',
  templateUrl: './artist-session-history.component.html',
  styleUrls: ['./artist-session-history.component.scss']
})
export class ArtistSessionHistoryComponent implements OnInit {

  q:any;
  itemsPerPage = 5;
  currentPage = 1;
  term:any;




  data = [

    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    },
    {
      artist: 'Liza',
      customer : 'King',
      phone: '543453543',
      date : '30-10-2022',
      time : '12:45',
    }

  ]
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private translationService:TranslationService, private apiService: ApiService, private datePipe: DatePipe) { }
  public selectedAppDate = this.datePipe.transform(this.apiService.selectedAppDate, 'yyyy-MM-dd');
  ngOnInit(): void {
    //let date = this.datePipe.transform(this.selectedAppDate, 'yyyy-MM-dd');
    //debugger;
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.appointments_listing;
      });
    });
  }

}
