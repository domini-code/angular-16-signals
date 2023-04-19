import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  canActivate():
    | Observable<boolean>
    | boolean
    | UrlTree {
    return this.authService.isAuthenticated$().pipe(
      take(1),
      tap((isLoggedIn) => !isLoggedIn ? this.router.navigate(['/login']) : true)
    );
  }
}

