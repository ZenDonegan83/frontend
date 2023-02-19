import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { commonUtil } from "app/core/utils/commonUtil";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (commonUtil.isLoggedIn()) {
      return true;
    } else {
      this.navigateToLogin();
    }
  }

  public navigateToLogin(): void {
    this.router.navigate(["login"]);
  }
  public navigateToDashboard(): void {
    this.router.navigate(["dashboard"]);
  }
}
