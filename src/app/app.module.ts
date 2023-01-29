import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from "./error/error.component";
import { NavigationModule } from "./navigation/navigation.module";
import { DeleteComponent } from "./modal-popups/delete/delete.component";
import { ArtistSessionHistoryComponent } from './modal-popups/artist-session-history/artist-session-history.component';
import { ClientSessionHistoryComponent } from './modal-popups/client-session-history/client-session-history.component';
import { AddArtistComponent } from './modal-popups/add-artist/add-artist.component';
import { AddClientComponent } from './modal-popups/add-client/add-client.component';

 

@NgModule({
    imports: [
        NgxPaginationModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule,
        NavigationModule,

        // dashboard modules
        NgApexchartsModule,
        NgChartsModule,

        // calendar modules
        FullCalendarModule,

        // angular material modules
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DeleteComponent,
    ErrorComponent,
    ArtistSessionHistoryComponent,
    ClientSessionHistoryComponent,
    AddArtistComponent,
    AddClientComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [AddClientComponent ,AddArtistComponent ,DeleteComponent]
})
export class AppModule { }

