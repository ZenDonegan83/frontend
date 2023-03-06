import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslationService } from "../../../core/services/transalation.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ArtistService } from "./../../../core/services/artist.service";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "./../../../core/services/account.service";
import { commonUtil } from "app/core/utils/commonUtil";
import { UserSessionDto } from "./../../../core/models/userSessionDto";
import { CommonService } from "./../../../core/services/common.service";
import { DomSanitizer } from "@angular/platform-browser";

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
  profilePic: any = null;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: UserSessionDto,
    private translationService: TranslationService,
    private _service: ArtistService,
    private toastr: ToastrService,
    private _commonService: CommonService,
    private sanitizer: DomSanitizer
  ) {
    this.artistForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      password: ["", Validators.required],
      profilePicURL: [""],
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.artistID > 0) {
      this.artistForm.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        username: this.data.username,
        password: this.data.password,
        profilePicURL: this.data.profilePicURL,
      });

      if (this.data.profilePicURL) {
        this._commonService
          .getFile(this.data.profilePicURL)
          .subscribe((data: any) => {
            const reader = new FileReader();
            reader.onload = (e) => (this.profilePic = e.target.result);
            reader.readAsDataURL(new Blob([data]));
            // let objectURL = "data:image/png;base64," + data;
            // this.profilePic = this.sanitizer.bypassSecurityTrustUrl(objectURL);

            // var urlCreator = window.URL || window.webkitURL;
            // var imageUrl = urlCreator.createObjectURL(data);
            // this.profilePic = data;
          });
      }
    }
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.add_artist;
      });
    });
  }

  onFileClick() {
    document.getElementById("file").click();
  }

  addArtist(artistForm: FormGroup) {
    this.submitted = true;
    if (!artistForm.invalid) {
      this.submitted = false;

      let request: any = artistForm.value;
      // if (this.file) {
      //   request = new FormData();
      //   request.append("file", this.file);
      //   request = commonUtil.convertModelToFormData(artistForm.value, request);
      // }

      if (this.data && this.data.artistID > 0) {
        request.artistID = this.data.artistID;
      }

      this._service.CreateOrUpdate(request).subscribe((result) => {
        if (result) {
          if (result.status == "SUCCESS") {
            this.toastr.success("Artist created successfully!");
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
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.isSelected = false;
      const [file] = event.target.files;
      this.file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;

        if (this.file) {
          var request = new FormData();
          request.append("file", this.file);
          this._commonService.uploadFile(request).subscribe((result) => {
            if (result) {
              if (result.status == "SUCCESS") {
                this.profilePic = null;
                this.artistForm.patchValue({
                  profilePicURL: result.result,
                });
                this.toastr.success("Image uploaded successfully!");
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
      };
    }
  }
}
