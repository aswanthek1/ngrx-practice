import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { CounterReducer } from './states/counter/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodosEffects } from './states/todo/todo.effects';
import { provideHttpClient } from '@angular/common/http';
import { TodoReducer } from './states/todo/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideStore(),
    provideHttpClient(),
    provideState({ name: 'counter', reducer: CounterReducer }),
    provideState({name:'todos', reducer:TodoReducer}),
    provideEffects(TodosEffects)
  ]
};
