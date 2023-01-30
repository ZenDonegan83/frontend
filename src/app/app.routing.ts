import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './modal-popups/error/error.component';
import { LayoutComponent } from "./pages/layout/layout.component";

// ------------------- auth components ------------------
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '404', component:  ErrorComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'forget-password', component:  ForgetPasswordComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
    {
    path: '',
    component: LayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  }]},
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
