import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {TranslationService} from "../../core/services/transalation.service";
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  imageSrc: string | undefined;
  isSelected=true;
  clientForm :FormGroup;
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private fb :FormBuilder, public dialogRef: MatDialog, private translationService:TranslationService) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName : [ '' , Validators.required] ,
      tellNumber : ['',Validators.required],
      email : ['' ,Validators.required],
      password :  ['' ,Validators.required]

    });
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.add_client;

      });
    });
  }

  addClient(clientForm:FormGroup){
    console.log('addEventform values',this.clientForm.value);
    this.closeModal();

  }
  closeModal() {
    this.dialogRef.closeAll();
  }
  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      this.isSelected=false;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;

      };

    }
  }
}
