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
import { AppointmentDetailComponent } from "./../appointment-detail/appointment-detail.component";
import { CommonService } from "app/core/services/common.service";
import { commonUtil } from "app/core/utils/commonUtil";

@Component({
  selector: "app-artist-session-history",
  templateUrl: "./artist-session-history.component.html",
  styleUrls: ["./artist-session-history.component.scss"],
})
export class ArtistSessionHistoryComponent implements OnInit {
  qSH: any;
  itemsPerPageSH = 5;
  currentPageSH = 1;
  termSH: any;

  // data = [
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  //   {
  //     artist: "Liza",
  //     customer: "King",
  //     phone: "543453543",
  //     date: "30-10-2022",
  //     time: "12:45",
  //   },
  // ];
  events: EventDTO[] = [];
  filterEvents: EventDTO[] = [];
  selectedLanguage: any = "en";
  translation: any;
  profilePic: any = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserSessionDto,
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

    if (this.data && !this.data.artistID) {
      this.closeModal();
    }

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

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.appointments_listing;
      });
    });

    this.getList();
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

  getList() {
    debugger;
    this._eventService.getAll().subscribe((result) => {
      if (result.status == "SUCCESS") {
        debugger;
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
    this.dialog.closeAll();
  }

  viewModal(item: EventDTO) {
    if (item && item.eventID > 0) {
      const dialogRef = this.dialog.open(AppointmentDetailComponent, {
        width: "100%",
        data: item,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`); // Pizza!
      });
    }
  }
}
