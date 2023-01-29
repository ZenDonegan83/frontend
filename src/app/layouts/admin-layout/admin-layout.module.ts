import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ProfileModule } from 'app/profile/profile.module';
import { TemplateModule } from 'app/template/template.module';
import { BillingModule } from 'app/billing/billing.module';
import { AuthModule } from 'app/auth/auth.module';
import { ClientModule } from 'app/client/client.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ArtistModule} from "../../artist/artist.module";
import { NavigationModule } from "../../navigation/navigation.module";
 
@NgModule({
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
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: []
})
export class AdminLayoutModule {}
