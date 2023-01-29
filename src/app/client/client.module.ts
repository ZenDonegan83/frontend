import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClientRoutingModule } from './client-routing.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientListComponent } from './client-list/client-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ClientDetailComponent,
    ClientListComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    ClientRoutingModule ,
    MatTableModule ,
    MatPaginatorModule,
    MatSortModule,
    FormsModule , 
    ReactiveFormsModule,
   
    NgxPaginationModule
  ] ,
  entryComponents: [AddClientComponent],
})
export class ClientModule { }
