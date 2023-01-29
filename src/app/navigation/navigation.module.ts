import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from "@angular/router";
import { NavigationRoutingModule } from "./navigation-routing.module";



@NgModule({
    declarations: [
        FooterComponent,
        ToolbarComponent,
        SidenavComponent
    ],
    exports: [
        ToolbarComponent,
        SidenavComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NavigationRoutingModule
    ]
})
export class NavigationModule { }
