import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const jwtHelperService: JwtHelperService = new JwtHelperService();
    const token: string = localStorage.getItem('user');
    if (jwtHelperService.isTokenExpired(token)) {
      this.router.navigate(['/compte']);
    }
    return !jwtHelperService.isTokenExpired(token);

  }

}
