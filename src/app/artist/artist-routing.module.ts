import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
const routes: Routes = [
  {path: 'artist' , component :ArtistComponent} ,
  {path: 'add-artist' , component :AddArtistComponent},
  {path: 'artist-detail' , component :ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
