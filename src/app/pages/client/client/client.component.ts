import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { TranslationService } from "../../../core/services/transalation.service";
import { DeleteComponent } from "../../../modal-popups/delete/delete.component";
import { AddClientComponent } from "../add-client/add-client.component";
import { ClientService } from "./../../../core/services/client.service";
import { ClientSessionHistoryComponent } from "./../client-session-history/client-session-history.component";
import { CustomerDTO } from "./../../../core/models/customerDto";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  q: any;
  itemsPerPage = 5;
  currentPage = 1;
  term: any;
  // data = [
  //   {
  //     firstName: "Liza",
  //     lastName: "King",
  //     email: "lizaking@gmail.com",
  //     contactNumber: "123-456-7890",
  //     action: "M",
  //   },
  //   {
  //     firstName: "Liza",
  //     lastName: "King",
  //     email: "lizaking@gmail.com",
  //     contactNumber: "123-456-7890",
  //     action: "M",
  //   },
  //   {
  //     firstName: "Liza",
  //     lastName: "King",
  //     email: "lizaking@gmail.com",
  //     contactNumber: "123-456-7890",
  //     action: "M",
  //   },
  //   {
  //     firstName: "Liza",
  //     lastName: "King",
  //     email: "lizaking@gmail.com",
  //     contactNumber: "123-456-7890",
  //     action: "M",
  //   },
  //   {
  //     firstName: "Liza",
  //     lastName: "King",
  //     email: "lizaking@gmail.com",
  //     contactNumber: "123-456-7890",
  //     action: "M",
  //   },
  //   {
  //     firstName: "Liza",
  //     lastName: "King",
  //     email: "lizaking@gmail.com",
  //     contactNumber: "123-456-7890",
  //     action: "M",
  //   },
  // ];

  dataList: CustomerDTO[] = [];
  selectedLanguage: any = "en";
  translation: any;
  actions: any = [];
  constructor(
    public dialog: MatDialog,
    private translationService: TranslationService,
    private _service: ClientService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.translationService.language.subscribe((res: any) => {
      this.selectedLanguage = res;
      this.translationService.get().subscribe((data: any) => {
        this.translation = data.clients_listing;
        this.actions = data.actions;
      });
    });
    this.getList();
  }

  getList() {
    this._service.getAll().subscribe((result) => {
      if (result.status == "SUCCESS") {
        this.dataList = result.result;
      } else if (result.status == "FAILED") {
        result.appsErrorMessages.forEach((s) => {
          this.toastr.error(s.errorMessage);
        });
      } else {
        this.toastr.error("Something went wrong during register user");
      }
    });
  }
  openModal() {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: "80rem",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
  // editModal(item: any) {
  //   const dialogRef = this.dialog.open(AddClientComponent, {
  //     width: "80rem",
  //     data: item,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getList();
  //     console.log(`Dialog result: ${result}`); // Pizza!
  //   });
  // }
  // ViewModal(item: any) {
  //   const dialogRef = this.dialog.open(AddClientComponent, {
  //     width: "80rem",
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`); // Pizza!
  //   });
  // }
  // deleteModel(item: any) {
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     width: "80rem",
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getList();
  //     console.log(`Dialog result: ${result}`); // Pizza!
  //   });
  // }

  editModal(item: CustomerDTO) {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: "80rem",
      data: { ...item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
  viewModal(item: CustomerDTO) {
    debugger;
    if (item && item.customerID > 0) {
      const dialogRef = this.dialog.open(ClientSessionHistoryComponent, {
        width: "100%",
        data: { ...item },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`); // Pizza!
      });
    }
  }

  // deleteModel(item: UserSessionDto) {
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     width: "80rem",
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getList();
  //     console.log(`Dialog result: ${result}`); // Pizza!
  //   });
  // }
}
