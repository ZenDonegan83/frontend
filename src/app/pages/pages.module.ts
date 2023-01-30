import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from "./pages-routing.module";

// ---------------------- pages modules ---------------
import { ProfileModule } from "./profile/profile.module";
import { TemplateModule } from "./template/template.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { ArtistModule } from "./artist/artist.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { BillingModule } from "./billing/billing.module";
import { ClientModule } from "./client/client.module";

// --------- importing modal popups -------------------
import { ModalPopupsModule } from "../modal-popups/modal-popups.module";

// --------- navigation module ------------------------
import { NavigationModule } from "../navigation/navigation.module";





@NgModule({
  declarations: [
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,

        // ------ page modules
        DashboardModule,
        ArtistModule,
        ScheduleModule,
        TemplateModule,
        BillingModule,
        ProfileModule,
        ClientModule,

        // ------ all modal popups
        ModalPopupsModule,
        NavigationModule
    ]
})
export class PagesModule { }
