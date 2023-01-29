import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../core/services/transalation.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.artist_detail;

      });
    });
  }

}
