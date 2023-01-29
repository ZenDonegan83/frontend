import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppHistoryComponent } from './app-history/app-history.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppHistoryComponent,
    AppDetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    AppointmentsRoutingModule
  ],providers: [
    DatePipe
  ]
})
export class AppointmentsModule { }
