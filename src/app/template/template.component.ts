import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {TranslationService} from "../core/services/transalation.service";
import {DeleteComponent} from "../modal-popups/delete/delete.component";


@Component({
  selector: 'app-template',
  templateUrl: './templates.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  selectedLanguage: any = 'en';
  translation: any = [];
  constructor(public dialog: MatDialog, private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.templates.btn_actions;

      });
    });
  }

  opendeleteModel(){

    const dialogRef = this.dialog.open(DeleteComponent ,{
          width :'80rem'
        });

      }
}
