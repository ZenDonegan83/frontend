import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from "./client/client.component";
import { ClientRoutingModule } from "./client-routing.module";

//  -------------- material and forms imports ---------
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
      ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,

    // component specific modules
    Ng2SearchPipeModule,
    MatTableModule ,
    MatPaginatorModule,
    MatSortModule,
    FormsModule ,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class ClientModule { }

