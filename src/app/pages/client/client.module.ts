import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientRoutingModule } from "./client-routing.module";

import { ClientComponent } from "./client/client.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { ClientSessionHistoryComponent } from "./client-session-history/client-session-history.component";

//  -------------- material and forms imports ---------
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ClientAppointmentDetailComponent } from "./client-appointment-detail/client-appointment-detail.component";

@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent,
    ClientSessionHistoryComponent,
    ClientAppointmentDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ClientRoutingModule,

    // component specific modules
    Ng2SearchPipeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,

    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class ClientModule {}
