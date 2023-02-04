import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Router} from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "../../../core/services/api.service";
import { AddEventComponent } from "../add-event/add-event.component";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  calendarVisible = true;
  currentEvents: EventApi[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today,addEventButton',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'timeGridWeek',
    weekends: true,
    editable: true,
    selectable: false,
    customButtons :{
      addEventButton: {
        text: 'Add New Event',
        click: this.handleDateSelect.bind(this)
      }
    },
    selectMirror: true,
    dayMaxEvents: true,
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  constructor(private route:Router, private changeDetector: ChangeDetectorRef, public dialog: MatDialog, public apiService: ApiService) {
  }
  ngOnInit(): void {
  }
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const dialogRef = this.dialog.open(AddEventComponent ,{});
  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log(clickInfo.event.start);
    this.apiService.selectedAppDate = clickInfo.event.start;
    this.route.navigate(['appointment-history']);
    /* if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
       clickInfo.event.remove();
     }*/
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }


}
