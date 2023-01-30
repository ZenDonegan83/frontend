import { Component, OnInit } from '@angular/core';
import { AddArtistComponent } from "../add-artist/add-artist.component";
import { DeleteComponent } from "../../../modal-popups/delete/delete.component";
import { MatDialog } from "@angular/material/dialog";
import { TranslationService } from "../../../core/services/transalation.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  q:any;
  itemsPerPage = 5;
  currentPage = 1;
  term:any;




  data = [

    {
      firstName: 'Liza',
      lastName : 'King',
      email: 'lizaking@gmail.com',
      contactNumber : '123-456-7890',
      action : 'M',

    },
    {
      firstName: 'Liza',
      lastName : 'King',
      email: 'lizaking@gmail.com',
      contactNumber : '123-456-7890',
      action : 'M',

    },
    {
      firstName: 'Liza',
      lastName : 'King',
      email: 'lizaking@gmail.com',
      contactNumber : '123-456-7890',
      action : 'M',

    },
    {
      firstName: 'Liza',
      lastName : 'King',
      email: 'lizaking@gmail.com',
      contactNumber : '123-456-7890',
      action : 'M',

    },
    {
      firstName: 'Liza',
      lastName : 'King',
      email: 'lizaking@gmail.com',
      contactNumber : '123-456-7890',
      action : 'M',

    },
    {
      firstName: 'Liza',
      lastName : 'King',
      email: 'lizaking@gmail.com',
      contactNumber : '123-456-7890',
      action : 'M',

    },
  ]
  selectedLanguage: any = 'en';
  translation: any = [];
  actions :any = [];

  constructor(public dialog: MatDialog, private translationService:TranslationService) {}

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.artist_listing;
        this.actions = data.actions;

      });
    });
  }


  openartistModel(){
    const dialogRef = this.dialog.open(AddArtistComponent ,{
      width :'80rem'
    });
  }
  opendeleteModel(){

    const dialogRef = this.dialog.open(DeleteComponent ,{
      width :'80rem'
    });

  }
}
