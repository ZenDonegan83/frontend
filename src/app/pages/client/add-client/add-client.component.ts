import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { commonUtil } from "app/core/utils/commonUtil";
import { ToastrService } from "ngx-toastr";
import { TranslationService } from "../../../core/services/transalation.service";
import { ClientService } from "./../../../core/services/client.service";
import { CustomerDTO } from "./../../../core/models/customerDto";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  imageSrc: string | undefined;
  isSelected = true;
  clientForm: FormGroup;
  selectedLanguage: any = "en";
  translation: any;
  submitted: boolean = false;
  file?: any = null;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: CustomerDTO,
    private translationService: TranslationService,
    private _service: ClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      telNumber: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });

    if (this.data && this.data.customerID > 0) {
      this.clientForm.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        telNumber: this.data.telNumber,
      });
    }

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.add_client;
      });
    });
  }

  addClient(clientForm: FormGroup) {
    this.submitted = true;
    debugger;
    if (!clientForm.invalid) {
      this.submitted = false;

      let request: any = clientForm.value;
      if (this.file) {
        request = new FormData();
        request.append("profilePic", this.file);
        request = commonUtil.convertModelToFormData(clientForm.value, request);
      }

      if (this.data && this.data.customerID > 0) {
        request.customerID = this.data.customerID;
      }

      this._service.CreateOrUpdate(request).subscribe((result) => {
        if (result) {
          if (result.status == "SUCCESS") {
            this.toastr.success("Client created successfully!");
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
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }
}
