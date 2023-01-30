import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArtistComponent,
    ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    ArtistRoutingModule ,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class ArtistModule { }
