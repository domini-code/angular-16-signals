import { Component } from '@angular/core';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl font-bold underline">
    PRIVATE works!
  </h1>`,
})
export class PrivateComponent {}
