import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslationService } from "../../../core/services/transalation.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {
  artistForm :FormGroup ;
  imageSrc: string | undefined;
  isSelected=true;
  selectedLanguage: any = 'en';
  translation: any;
  constructor(private fb :FormBuilder, public dialogRef: MatDialog, private translationService:TranslationService) {
    this.artistForm = this.fb.group({
      firstName :['' ,Validators.required],
      lastName :['' ,Validators.required],
      email :['' ,Validators.required],
      username :['' ,Validators.required],
      number:['' ,Validators.required],
      password:['' ,Validators.required],

    })
  }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.add_artist;
      });
    });
  }

  addArtist(artistForm:FormGroup){
    console.log('addEventform values',this.artistForm.value);
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

