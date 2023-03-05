import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AdminService } from './shared/admin.service';

@Injectable({
  providedIn: 'root'
})
export class PremiumGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router : Router, private _adminservice : AdminService){}

  canActivate(): boolean {  
    if((this._auth.loggedIn() && this._auth.isPremiumUser()) || this._adminservice.adminLoggedIn()){
      return true;
    } else if (this._auth.loggedIn() && !this._auth.isPremiumUser()){
      window.alert("You are not a Premium User")
      this._router.navigate(['/user-profile'])
      return false;
    } else {
      window.alert("You Need to Login First")
      this._router.navigate(['/login'])
      return false;
    }
  }
}
