import { Component, Inject, OnInit } from "@angular/core";
import { TranslationService } from "../../../core/services/transalation.service";
import { ApiService } from "../../../core/services/api.service";
import { DatePipe } from "@angular/common";
import { ClientService } from "./../../../core/services/client.service";
import { EventService } from "app/core/services/event.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CommonService } from "app/core/services/common.service";
import { CustomerDTO } from "./../../../core/models/customerDto";
import { EventDTO } from "app/core/models/eventDto";
import { ClientAppointmentDetailComponent } from "./../client-appointment-detail/client-appointment-detail.component";
import { commonUtil } from "app/core/utils/commonUtil";

@Component({
  selector: "app-client-session-history",
  templateUrl: "./client-session-history.component.html",
  styleUrls: ["./client-session-history.component.scss"],
})
export class ClientSessionHistoryComponent implements OnInit {
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
    private translationService: TranslationService,
    private apiService: ApiService,
    // private datePipe: DatePipe,

    @Inject(MAT_DIALOG_DATA) public data: CustomerDTO,
    private _service: ClientService,
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
    if (this.data && !this.data.customerID) {
      // this.closeModal();
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

    debugger;
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        debugger;
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
        this.events = result.result;
        this.filterEvents = this.events.filter(
          (s) => s.customerDTO.customerID == this.data.customerID
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
      const dialogRef = this.dialog.open(ClientAppointmentDetailComponent, {
        width: "100%",
        data: item,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`); // Pizza!
      });
    }
  }
}
