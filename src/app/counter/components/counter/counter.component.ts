//? Los componentes son simplemente clases que se exportan y tienen un decorador
//* selector: Como se quiere utilizar Counter en el html, se acostumbra el prefijo "app-""
//* template: Crea el template como un string
//* "a-" para snippets, mayus + alt + down arrow to copy the current line and paste it above

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <!--? Similar a onclick de js -->
    <button (click)="increaseVal()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseVal()">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseVal(): void {
    this.counter++;
  }

  decreaseVal(): void {
    this.counter--;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
