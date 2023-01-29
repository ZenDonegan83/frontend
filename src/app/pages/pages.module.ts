import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from "./pages-routing.module";

import {DashboardModule} from "./dashboard/dashboard.module";
import {ArtistModule} from "./artist/artist.module";
import {ScheduleModule} from "./schedule/schedule.module";
import {TemplateModule} from "./template/template.module";
import {BillingModule} from "./billing/billing.module";
import {ProfileModule} from "./profile/profile.module";
import {AppointmentsModule} from "../appointments/appointments.module";
import {ClientModule} from "./client/client.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    ArtistModule,
    ScheduleModule,
    TemplateModule,
    BillingModule,
    ProfileModule,
    AppointmentsModule,
    ClientModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
