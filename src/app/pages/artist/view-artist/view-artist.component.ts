import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslationService } from "../../../core/services/transalation.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ArtistService } from "./../../../core/services/artist.service";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "./../../../core/services/account.service";
import { commonUtil } from "app/core/utils/commonUtil";
import { UserSessionDto } from "./../../../core/models/userSessionDto";
import { EventService } from "./../../../core/services/event.service";
import { EventDTO } from "app/core/models/eventDto";
@Component({
  selector: "app-view-artist",
  templateUrl: "./view-artist.component.html",
  styleUrls: ["./view-artist.component.scss"],
})
export class ViewArtistComponent implements OnInit {
  // artistForm: FormGroup;

  q: any;
  itemsPerPage = 5;
  currentPage = 1;
  public term: any;

  imageSrc: string | undefined;
  isSelected = true;
  selectedLanguage: any = "en";
  translation: any;
  submitted: boolean = false;
  file?: any = null;

  events: EventDTO[] = [];
  filterEvents: EventDTO[] = [];

  constructor(
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: UserSessionDto,
    private translationService: TranslationService,
    private _service: ArtistService,
    private _eventService: EventService,
    private toastr: ToastrService
  ) {}
  // public selectedAppDate = this.datePipe.transform(
  //   this.apiService.selectedAppDate,
  //   "yyyy-MM-dd"
  // );
  ngOnInit(): void {
    if (this.data && !this.data.artistID) {
      this.dialogRef.closeAll();
    }
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.add_artist;
      });
    });

    this.getList();
  }
  getList() {
    this._eventService.getAll().subscribe((result) => {
      if (result.status == "SUCCESS") {
        this.events = result.result;
        this.filterEvents = this.events.filter(
          (s) => s.artistID == this.data.artistID
        );
      } else if (result.status == "FAILED") {
        result.appsErrorMessages.forEach((s) => {
          this.toastr.error(s.errorMessage);
        });
      } else {
        this.toastr.error("Someting went wrong during register user");
      }
    });
  }

  closeModal() {
    this.dialogRef.closeAll();
  }
}
