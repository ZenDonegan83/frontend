import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  imageSrc: string | undefined;
  isSelected=true;
  addeventForm:FormGroup ;

  constructor(private fb :FormBuilder, public dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.addeventForm = this.fb.group({
      firstName :['' ,Validators.required],
      lastName :['' ,Validators.required],
      email :['' ,Validators.required],
      telephone :['' ,Validators.required],
      artist:['' ,Validators.required],
      price:['' ,Validators.required],
      location:['' ,Validators.required],
      start:['' ,Validators.required],
      end:['' ,Validators.required],

    });
    
  }

  addArtist(addeventForm:FormGroup){
    console.log('addEventform values',this.addeventForm.value);
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
