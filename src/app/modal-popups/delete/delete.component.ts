import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TranslationService} from "../../core/services/transalation.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  selectedLanguage: any = 'en';
  translation: any;
  constructor(public dialogRef: MatDialog,  private translationService:TranslationService) { }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.delete_dialog;
      });
    });
  }
  closeModal() {
    this.dialogRef.closeAll();
  }

}
