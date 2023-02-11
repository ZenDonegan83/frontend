import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslationService } from "../../../core/services/transalation.service";
import { MatDialog } from "@angular/material/dialog";
import { ArtistService } from "./../../../core/services/artist.service";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "./../../../core/services/account.service";
import { commonUtil } from "app/core/utils/commonUtil";

@Component({
  selector: "app-add-artist",
  templateUrl: "./add-artist.component.html",
  styleUrls: ["./add-artist.component.scss"],
})
export class AddArtistComponent implements OnInit {
  artistForm: FormGroup;
  imageSrc: string | undefined;
  isSelected = true;
  selectedLanguage: any = "en";
  translation: any;
  submitted: boolean = false;
  file?: any = null;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialog,
    private translationService: TranslationService,
    private _service: ArtistService,
    private toastr: ToastrService
  ) {
    this.artistForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      number: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.add_artist;
      });
    });
  }

  addArtist(artistForm: FormGroup) {
    debugger;
    this.submitted = true;
    if (!artistForm.invalid) {
      console.log("addEventform values", this.artistForm.value);
      this.submitted = false;

      let formData = new FormData();
      formData.append("profilePic", this.file);
      formData = commonUtil.convertModelToFormData(artistForm.value, formData);
      this._service.CreateOrUpdate(formData).subscribe((result) => {
        if (result) {
          if (result.status == "SUCCESS") {
            this.toastr.success("Artist created Successfully!");
            this.closeModal();
          } else if (result.status == "FAILED") {
            result.appsErrorMessages.forEach((s) => {
              this.toastr.error(s.errorMessage);
            });
          } else {
            this.toastr.error("Someting went wrong during register user");
          }
        } else {
          this.toastr.error("Someting went wrong during register user");
        }
      });
    }
  }
  closeModal() {
    this.dialogRef.closeAll();
  }
  onFileChange(event: any) {
    debugger;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.isSelected = false;
      const [file] = event.target.files;
      this.file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }
}
