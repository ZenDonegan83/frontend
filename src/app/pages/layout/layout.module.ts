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



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ProfileModule,
    TemplateModule,
    BillingModule,
    AuthModule,
    ClientModule,
    NavigationModule,
    ArtistModule,
    RouterModule.forChild(LayoutRoutes)
  ]
})
export class LayoutModule { }
