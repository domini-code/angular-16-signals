import { JsonPipe, NgIf } from '@angular/common';
import { Component, Signal, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="text-3xl font-bold">Price: {{ price() }}</h1>
    <p>{{ user() | json }}</p>
    <p>asReadonly: {{ priceReadonly() }}</p>
    <input
      type="text"
      (input)="onChange($event)"
      class="border border-gray-200 my-5"
      [ngModel]="price()"
    />
    <br />
    <button class="rounded-md bg-sky-400 p-4" (click)="onBuy()">Buy</button>
    <br />
    <button class="rounded-md bg-sky-400 p-4 mt-3" (click)="onMutate()">
      Mutate
    </button>
  <div class="border-4 p-3 mt-2" *ngIf="this.price() > 0">
  <p>Courier: {{courier}}</p>
  <p>Price: {{price()}}</p>
  <p>Total: {{total()}}</p>
  </div>

  `,
  standalone: true,
  imports: [JsonPipe, FormsModule, NgIf],
})
export class HomeComponent {
  price = signal(0);
  priceReadonly = this.price.asReadonly();
  courier = 7;
  total!: Signal<number>;

  user = signal({ name: 'Dominicode', framework: 'Angular' });

  constructor() {
    this.total = computed(() => this.price() + this.courier);
    const effectRef = effect ( ()=>  console.log(JSON.stringify(this.user())))
    effectRef.destroy();
  }
  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    this.price.set(Number(value));
    // this.priceReadonly.set();
  }

  onBuy(): void {
    /*   const currentValue = this.price();
    const total = currentValue + this.courier;
    this.price.set(total); */
    this.price.update((currentValue) => currentValue + this.courier);
  }

  onMutate(): void {
    this.user.mutate((user) => user.name = 'Bezael');
  }
}




























