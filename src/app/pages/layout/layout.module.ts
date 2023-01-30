import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout-routing.module";


import { ProfileModule } from "../profile/profile.module";
import { TemplateModule } from "../template/template.module";
import { ClientModule } from "../client/client.module";
import { BillingModule } from "../billing/billing.module";
import { AuthModule } from "../../auth/auth.module";
import { NavigationModule } from "../../navigation/navigation.module";
import { ArtistModule } from "../artist/artist.module";

// -------------- module components ------------------
import {NgApexchartsModule} from "ng-apexcharts";
import {NgChartsModule} from "ng2-charts";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FullCalendarModule} from "@fullcalendar/angular";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [],
  imports: [
    NgxPaginationModule,
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    ProfileModule,
    TemplateModule ,
    BillingModule ,
    AuthModule ,
    ClientModule,
    NavigationModule,
    ArtistModule,
    NgApexchartsModule,
    RouterModule.forChild(LayoutRoutes),
  ]
})
export class LayoutModule { }
