import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ------------- modal popups ---------------
import { AddArtistComponent } from "./add-artist/add-artist.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { AddEventComponent } from "./add-event/add-event.component";
import { ArtistSessionHistoryComponent } from "./artist-session-history/artist-session-history.component";
import { ClientSessionHistoryComponent } from "./client-session-history/client-session-history.component";
import { DeleteComponent } from "./delete/delete.component";
import { FullSessionDetailsComponent } from "./full-session-details/full-session-details.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
    declarations: [
     AddArtistComponent,
     AddClientComponent,
     AddEventComponent,
     ArtistSessionHistoryComponent,
     ClientSessionHistoryComponent,
     DeleteComponent,
     FullSessionDetailsComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        NgxPaginationModule,

    ]
})
export class ModalPopupsModule { }