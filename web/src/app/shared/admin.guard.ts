import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private _authService: AuthService,
    private _router : Router,
    private adminservice : AdminService) {}

  canActivate(): boolean {
    if(this.adminservice.adminLoggedIn()){
      return true
    } else {
      this._router.navigate(['/log-in'])
      return false
    }
  }

  
}
