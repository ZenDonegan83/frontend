import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { FullCalendarModule } from "@fullcalendar/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ScheduleRoutingModule } from "./schedule-routing.module";
import { AddEventComponent } from "./add-event/add-event.component";



@NgModule({
  declarations: [
    ScheduleComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ScheduleRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class ScheduleModule { }
