import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { AddArtistComponent} from "./add-artist/add-artist.component";
import { ArtistSessionHistoryComponent } from "./artist-session-history/artist-session-history.component";

const routes: Routes = [
    { path: 'artist' , component :ArtistComponent } ,
    { path: 'add-artist' , component : AddArtistComponent },
    { path: 'artist-session-history' , component : ArtistSessionHistoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistRoutingModule { }