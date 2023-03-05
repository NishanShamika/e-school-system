import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthGuard implements CanActivate {
  constructor (private _authService: AuthService,
    private _router : Router) {}


  canActivate(): boolean {
    if(this._authService.isTeacher()){
      return true;
    }else {
      window.alert("You are Not a Teacher")
      this._router.navigate(['/user-profile'])
      return false
    }
    
  }
  
}
