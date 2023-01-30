import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from "./error/error.component";
import { NavigationModule } from "./navigation/navigation.module";
import { ModalPopupsModule } from "./modal-popups/modal-popups.module";
import { LayoutComponent } from "./pages/layout/layout.component";
import { AuthModule } from "./auth/auth.module";
import { LayoutModule } from "./pages/layout/layout.module";


@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule,
        NavigationModule,
        AuthModule,
        LayoutModule,

        // ---- modal pop ups
        ModalPopupsModule,
    ],
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

