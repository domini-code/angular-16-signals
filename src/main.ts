import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AuthGuard } from './app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'private',
    loadComponent: () =>
      import('@pages/private/private.component').then(
        (c) => c.PrivateComponent
      ),
    canActivate: [AuthGuard],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
