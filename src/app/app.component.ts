import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<app-navbar />
    <div class="container mx-auto my-2">
      <router-outlet></router-outlet>
    </div>`,
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
})
export class AppComponent {
  title = 'Demo WK';
}
