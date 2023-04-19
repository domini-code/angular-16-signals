import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <h1 class="text-3xl font-bold underline">Hello world! HOME</h1>`,
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent {}
