import { createAction, props } from "@ngrx/store";

export const loadTodos = createAction('[Todos Component] Load Todos');
export const loadTodosSuccess = createAction('[Todos Component ] Todos Loaded Success', props<{data:any}>());
export const loadTodosFailure = createAction('[Todos Component ] Todos Loaded Failure', props<{error:any}>());
export const filterTodos = createAction('[Todos Component] Todos Filter', props<{todoType:string|boolean}>());