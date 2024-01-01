import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-practice';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount)
  }

}
