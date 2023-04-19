import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    debugger;
    return this.authService.isAuthenticated$().pipe(
      take(1),
      map((isLoggedIn) => {
        debugger;
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
