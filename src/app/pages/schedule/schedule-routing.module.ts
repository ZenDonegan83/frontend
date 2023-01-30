import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from "./schedule/schedule.component";
import { AddEventComponent } from "./add-event/add-event.component";


const routes: Routes = [
    {
        path : '',
        component:ScheduleComponent
    },
    {
        path : 'add-event',
        component:AddEventComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule { }
