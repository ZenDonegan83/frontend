import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from "./client/client.component";
import { ClientSessionHistoryComponent } from "./client-session-history/client-session-history.component";
import { AddClientComponent } from "./add-client/add-client.component";


const routes: Routes = [
    { path: 'client', component: ClientComponent },
    { path: 'add-client' , component : AddClientComponent },
    { path: 'client-session-history' , component : ClientSessionHistoryComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
