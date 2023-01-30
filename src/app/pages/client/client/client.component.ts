import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { TranslationService } from "../../../core/services/transalation.service";
import { DeleteComponent } from "../../../modal-popups/delete/delete.component";
import { AddClientComponent } from "../../../modal-popups/add-client/add-client.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
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
  translation: any;
  actions:any = [];
  constructor(public dialog: MatDialog, private translationService:TranslationService) {}
  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.clients_listing;
        this.actions = data.actions;
      });
    });
  }


  openClientModel(){

    const dialogRef = this.dialog.open(AddClientComponent ,{
      width :'80rem'
    });

  }

  opendeleteModel(){

    const dialogRef = this.dialog.open(DeleteComponent ,{
      width :'80rem'
    });

  }


}
