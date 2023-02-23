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

@Component({
  selector: "app-appointment-detail",
  templateUrl: "./appointment-detail.component.html",
  styleUrls: ["./appointment-detail.component.scss"],
})
export class AppointmentDetailComponent implements OnInit {
  q: any;
  itemsPerPage = 5;
  currentPage = 1;
  term: any;

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
    public dialog: MatDialog
  ) {
    debugger;
  }
  // public selectedAppDate = this.datePipe.transform(
  //   this.apiService.selectedAppDate,
  //   "yyyy-MM-dd"
  // );
  ngOnInit(): void {
    //let date = this.datePipe.transform(this.selectedAppDate, 'yyyy-MM-dd');
    //debugger;
    debugger;

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.appointments_listing;
      });
    });

    // this.getById();
  }

  toSeconds(time_str) {
    // Extract hours, minutes and seconds
    var parts = time_str.split(":");
    // compute  and return total seconds
    return (
      parts[0] * 3600 + // an hour has 3600 seconds
      parts[1] * 60 // a minute has 60 seconds
    );
  }

  GetTimeDuration(startTime: string, endTime: string) {
    debugger;
    let sSec = this.toSeconds(startTime);
    let eSec = this.toSeconds(endTime);
    var difference = Math.abs(sSec - eSec);
    // format time differnece
    var result = [
      Math.floor(difference / 3600), // an hour has 3600 seconds
      Math.floor((difference % 3600) / 60), // a minute has 60 seconds
    ];
    // 0 padding and concatation
    var resultStr = result
      .map(function (v) {
        return v < 10 ? "0" + v : v;
      })
      .join(":");

    return resultStr;
  }

  timeConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
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
