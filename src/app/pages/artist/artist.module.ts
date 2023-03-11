import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistRoutingModule } from "./artist-routing.module";
import { ArtistComponent } from "./artist/artist.component";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddArtistComponent } from "./add-artist/add-artist.component";
import { ArtistSessionHistoryComponent } from "./artist-session-history/artist-session-history.component";
import { ViewArtistComponent } from "./view-artist/view-artist.component";
import { AppointmentDetailComponent } from "./appointment-detail/appointment-detail.component";
import { MatDialogModule } from "@angular/material/dialog";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    ArtistComponent,
    AddArtistComponent,
    ArtistSessionHistoryComponent,
    ViewArtistComponent,
    AppointmentDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArtistRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class ArtistModule {}
