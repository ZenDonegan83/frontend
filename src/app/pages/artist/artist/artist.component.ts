import { Component, OnInit } from "@angular/core";
import { AddArtistComponent } from "../add-artist/add-artist.component";
import { DeleteComponent } from "../../../modal-popups/delete/delete.component";
import { MatDialog } from "@angular/material/dialog";
import { TranslationService } from "../../../core/services/transalation.service";
import { ArtistService } from "app/core/services/artist.service";
import { ToastrService } from "ngx-toastr";

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

  public data: any[] = [
    {
      firstName: "Liza",
      lastName: "King",
      email: "lizaking@gmail.com",
      contactNumber: "123-456-7890",
      action: "M",
    },
    {
      firstName: "Liza",
      lastName: "King",
      email: "lizaking@gmail.com",
      contactNumber: "123-456-7890",
      action: "M",
    },
    {
      firstName: "Liza",
      lastName: "King",
      email: "lizaking@gmail.com",
      contactNumber: "123-456-7890",
      action: "M",
    },
    {
      firstName: "Liza",
      lastName: "King",
      email: "lizaking@gmail.com",
      contactNumber: "123-456-7890",
      action: "M",
    },
    {
      firstName: "Liza",
      lastName: "King",
      email: "lizaking@gmail.com",
      contactNumber: "123-456-7890",
      action: "M",
    },
    {
      firstName: "Liza",
      lastName: "King",
      email: "lizaking@gmail.com",
      contactNumber: "123-456-7890",
      action: "M",
    },
  ];
  selectedLanguage: any = "en";
  translation: any = [];
  actions: any = [];
  dtOptions: DataTables.Settings = {};

  constructor(
    public dialog: MatDialog,
    private translationService: TranslationService,
    private _service: ArtistService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 6,
    };

    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.artist_listing;
        this.actions = data.actions;
      });
    });

    // this._service.getAll().subscribe((result) => {
    //   debugger;
    // });
  }

  openartistModel() {
    const dialogRef = this.dialog.open(AddArtistComponent, {
      width: "80rem",
    });
  }
  opendeleteModel() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: "80rem",
    });
  }
}
