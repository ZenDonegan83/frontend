import { Component, Inject, OnInit } from "@angular/core";
import { TranslationService } from "../../../core/services/transalation.service";
import { ApiService } from "../../../core/services/api.service";
import { DatePipe } from "@angular/common";
import { EventDTO } from "app/core/models/eventDto";
import { EventService } from "app/core/services/event.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserSessionDto } from "app/core/models/userSessionDto";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-artist-session-history",
  templateUrl: "./artist-session-history.component.html",
  styleUrls: ["./artist-session-history.component.scss"],
})
export class ArtistSessionHistoryComponent implements OnInit {
  q: any;
  itemsPerPage = 5;
  currentPage = 1;
  term: any;

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
  constructor(
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: UserSessionDto,
    private translationService: TranslationService,
    private apiService: ApiService,
    private datePipe: DatePipe,
    private _eventService: EventService,
    private toastr: ToastrService
  ) {
    debugger;
  }
  public selectedAppDate = this.datePipe.transform(
    this.apiService.selectedAppDate,
    "yyyy-MM-dd"
  );
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
