import { Routes } from '@angular/router';
import { CounterComponent } from './modules/counter/counter.component';
import { TodoComponent } from './modules/todo/todo.component';

export const routes: Routes = [
    {path:'', component:CounterComponent},
    {path:"todo", component:TodoComponent}
];
