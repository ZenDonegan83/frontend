import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";

// ---------------- component specific ----------
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
  ]
})
export class DashboardModule { }
