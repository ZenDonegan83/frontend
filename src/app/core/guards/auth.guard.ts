import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(  private router: Router) { }
  canActivate(){
    return true;
    if(localStorage.getItem('token')){
      return true
    }else{
      this.router.navigate(['login'])
    }
  }
  
}
