import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from "./client-routing.module";


import { ClientComponent } from "./client/client.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { ClientSessionHistoryComponent } from "./client-session-history/client-session-history.component";

//  -------------- material and forms imports ---------
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      ClientComponent,
      AddClientComponent,
      ClientSessionHistoryComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,

    // component specific modules
    Ng2SearchPipeModule,
    ClientRoutingModule ,
    MatTableModule ,
    MatPaginatorModule,
    MatSortModule,
    FormsModule ,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
})
export class ClientModule { }

