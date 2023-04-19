import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template:
  `<h1 class="text-3xl font-bold underline">
    LOGIN works!
  </h1>`,
  standalone: true,
  imports: [CommonModule],
})
export class LoginComponent {}
