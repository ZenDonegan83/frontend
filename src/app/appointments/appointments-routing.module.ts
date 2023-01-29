import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { AppHistoryComponent } from './app-history/app-history.component';
const routes: Routes = [
  { path: 'appointment-history', component: AppHistoryComponent },
  { path: 'appointment-detail', component: AppDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
