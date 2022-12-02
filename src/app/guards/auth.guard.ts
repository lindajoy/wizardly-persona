import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';


import { AuthService } from '../shared/services/auth.service';

// service
@Injectable({
  providedIn: 'root',
})

export class AuthenticationGuard implements CanActivate 
{
  constructor(private auth: AuthService, 
               private router: Router)
                {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log('I am checking auth...');
    
    return this.auth
      .isLogged()
      .pipe(map((isLoggedIn) => isLoggedIn || this.router.createUrlTree([''])));
  }
}