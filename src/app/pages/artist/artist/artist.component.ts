import { Component, OnInit } from "@angular/core";
import { AddArtistComponent } from "../add-artist/add-artist.component";
import { DeleteComponent } from "../../../modal-popups/delete/delete.component";
import { MatDialog } from "@angular/material/dialog";
import { TranslationService } from "../../../core/services/transalation.service";
import { ArtistService } from "app/core/services/artist.service";
import { ToastrService } from "ngx-toastr";
import { UserSessionDto } from "./../../../core/models/userSessionDto";
import { ViewArtistComponent } from "./../view-artist/view-artist.component";
import { ArtistSessionHistoryComponent } from "./../artist-session-history/artist-session-history.component";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"],
})
export class ArtistComponent implements OnInit {
  q: any;
  itemsPerPage = 5;
  currentPage = 1;
  public term: any;

  public data: any[] = [];
  selectedLanguage: any = "en";
  translation: any = [];
  actions: any = [];

  constructor(
    public dialog: MatDialog,
    private translationService: TranslationService,
    private _service: ArtistService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.artist_listing;
        this.actions = data.actions;
      });
    });

    this.getList();
  }

  getList() {
    this._service.getAll().subscribe((result) => {
      if (result.status == "SUCCESS") {
        this.data = result.result;
      } else if (result.status == "FAILED") {
        result.appsErrorMessages.forEach((s) => {
          this.toastr.error(s.errorMessage);
        });
      } else {
        this.toastr.error("Someting went wrong during register user");
      }
    });
  }
  openModal() {
    const dialogRef = this.dialog.open(AddArtistComponent, {
      width: "80rem",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
  editModal(item: UserSessionDto) {
    if (item && item.password) {
      item.password = "***";
    }
    const dialogRef = this.dialog.open(AddArtistComponent, {
      width: "80rem",
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
  viewModal(item: UserSessionDto) {
    if (item && item.artistID > 0) {
      const dialogRef = this.dialog.open(ArtistSessionHistoryComponent, {
        width: "100%",
        data: item,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`); // Pizza!
      });
    }
  }

  deleteModel(item: UserSessionDto) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: "80rem",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
}
