import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { FullCalendarModule } from "@fullcalendar/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ScheduleRoutingModule } from "./schedule-routing.module";



@NgModule({
  declarations: [
    ScheduleComponent,

  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
