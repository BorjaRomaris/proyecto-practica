import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserHelper } from 'src/app/helpers/user-helper';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!UserHelper.isLoggedIn()) {
        console.log('No esta logeado');
        alert('No puedes acceder a esta URL');
        return of(false);
      }
      console.log('Está logeado');
      return of(true);
    }
}
