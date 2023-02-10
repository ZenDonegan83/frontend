import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { TranslateModule } from "@ngx-translate/core";

import { NgApexchartsModule } from "ng-apexcharts";

// ------------------------modules and components ------------------
import { ErrorComponent } from "./modal-popups/error/error.component";
import { NavigationModule } from "./navigation/navigation.module";
import { LayoutComponent } from "./pages/layout/layout.component";
import { AuthModule } from "./auth/auth.module";
import { LayoutModule } from "./pages/layout/layout.module";
import { ApiService } from "./core/services/api.service";
import { HTTPInterceptorService } from "./core/interceptors/http-interceptor.service";
import { ToastrModule } from "ngx-toastr";

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
    NgApexchartsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [AppComponent, LayoutComponent, ErrorComponent],
  // providers: [
  //   ApiService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: HTTPInterceptorService,
  //     multi: true,
  //   },
  //   // { provide: NZ_I18N, useValue: en_US },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
