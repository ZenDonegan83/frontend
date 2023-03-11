import { Component, Inject, OnInit } from "@angular/core";
import { TranslationService } from "../../../core/services/transalation.service";
import { ApiService } from "../../../core/services/api.service";
import { DatePipe } from "@angular/common";
import { EventDTO } from "app/core/models/eventDto";
import { EventService } from "app/core/services/event.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserSessionDto } from "app/core/models/userSessionDto";
import { ToastrService } from "ngx-toastr";
import { ArtistService } from "app/core/services/artist.service";
import { CommonService } from "app/core/services/common.service";
import { commonUtil } from "app/core/utils/commonUtil";

@Component({
  selector: "app-appointment-detail",
  templateUrl: "./appointment-detail.component.html",
  styleUrls: ["./appointment-detail.component.scss"],
})
export class AppointmentDetailComponent implements OnInit {
  event: EventDTO = null;
  selectedLanguage: any = "en";
  translation: any;

  checked = false;
  indeterminate = false;
  labelPosition: "before" | "after" = "after";
  disabled = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventDTO,
    private translationService: TranslationService,
    private _service: ArtistService,
    private _eventService: EventService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private _commonService: CommonService
  ) {}
  // public selectedAppDate = this.datePipe.transform(
  //   this.apiService.selectedAppDate,
  //   "yyyy-MM-dd"
  // );
  ngOnInit(): void {
    //let date = this.datePipe.transform(this.selectedAppDate, 'yyyy-MM-dd');
    //
    debugger;
    if (
      this.data &&
      this.data.eventImageList &&
      this.data.eventImageList.length > 0
    ) {
      this.data.eventImageList.forEach((s) => {
        if (s.imageURL) {
          this._commonService.getFile(s.imageURL).subscribe((data: any) => {
            const reader = new FileReader();
            reader.onload = (e) => (s.profilePic = e.target.result);
            reader.readAsDataURL(new Blob([data]));
            // let objectURL = "data:image/png;base64," + data;
            // this.profilePic = this.sanitizer.bypassSecurityTrustUrl(objectURL);

            // var urlCreator = window.URL || window.webkitURL;
            // var imageUrl = urlCreator.createObjectURL(data);
            // this.profilePic = data;
          });
        }
      });
    }
    // if (this.data.profilePicURL) {
    //   this._commonService
    //     .getFile(this.data.profilePicURL)
    //     .subscribe((data: any) => {
    //
    //       const reader = new FileReader();
    //       reader.onload = (e) => (this.profilePic = e.target.result);
    //       reader.readAsDataURL(new Blob([data]));
    //       // let objectURL = "data:image/png;base64," + data;
    //       // this.profilePic = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    //       // var urlCreator = window.URL || window.webkitURL;
    //       // var imageUrl = urlCreator.createObjectURL(data);
    //       // this.profilePic = data;
    //     });
    // }

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.appointments_listing;
      });
    });

    // this.getById();
  }

  toSeconds(time_str) {
    return commonUtil.toSeconds(time_str);
  }

  GetTimeDuration(startTime: string, endTime: string) {
    return commonUtil.GetTimeDuration(startTime, endTime);
  }

  timeConvert(time) {
    return commonUtil.timeConvert(time);
  }

  getById() {
    this._eventService.getById(this.event.eventID).subscribe((result) => {
      if (result.status == "SUCCESS") {
        this.event = result.result;
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
    this.dialog.closeAll();
  }
}
