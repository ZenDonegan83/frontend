import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {FooterComponent} from "./footer/footer.component";

const routes: Routes = [
    {path: 'sidenav' , component :SidenavComponent} ,
    {path: 'toolbar' , component :ToolbarComponent},
    {path: 'footer' , component :FooterComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule { }
