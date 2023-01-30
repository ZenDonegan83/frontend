import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ------------------ all modal pop up components ----------------------
import { AddArtistComponent } from "./add-artist/add-artist.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { AddEventComponent } from "./add-event/add-event.component";
import { ArtistSessionHistoryComponent } from "./artist-session-history/artist-session-history.component";
import { ClientSessionHistoryComponent } from "./client-session-history/client-session-history.component";
import { DeleteComponent } from "./delete/delete.component";
import { FullSessionDetailsComponent } from "./full-session-details/full-session-details.component";


const routes: Routes = [
    {path: 'add-artist' , component :AddArtistComponent} ,
    {path: 'add-client' , component :AddClientComponent},
    {path: 'add-event' , component :AddEventComponent},
    {path: 'artist-session-history' , component :ArtistSessionHistoryComponent},
    {path: 'client-session-history' , component :ClientSessionHistoryComponent},
    {path: 'delete' , component :DeleteComponent},
    {path: 'full-session-details' , component :FullSessionDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModalPopupsRoutingModule { }
