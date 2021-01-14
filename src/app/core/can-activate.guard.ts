import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './services/auth.service';
import {​​​​​​​catchError, map, tap}​​​​​​​ from 'rxjs/operators';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.me().pipe(
      catchError((error: Response)=>{
        let status = 500;
        if(error.status === 401 || error.status === 403){
          status = error.status;
        }
        return of({status});
      }),

      map((response: Response)=>{
        return !(401 === response.status || 403 === response.status);
      })
    )
  }
}
