// here we import our applications global state.

import { CounterState } from "./counter/counter.reducer";
import { TodoState } from "./todo/todo.reducer";

export interface AppState {
    counter: CounterState,
    todos: TodoState
}