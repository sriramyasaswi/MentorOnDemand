import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private _authService: AuthService,
              private _router: Router){}

  canActivate() : boolean {
    if(this._authService.loggedin()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
}
