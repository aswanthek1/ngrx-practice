// here we import our applications global state.

import { CounterState } from "./counter/counter.reducer";

export interface AppState {
    counter: CounterState
}