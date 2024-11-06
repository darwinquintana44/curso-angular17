import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  public counter: number = 0;

  upCounter( value: number ): void {
    this.counter += value;
  }

  resetCounter( value: number ): void {
    this.counter = value;
  }
}
