import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { CounterReducer } from './states/counter/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideStore(),
    provideState({name: 'counter', reducer: CounterReducer})
  ]
};
