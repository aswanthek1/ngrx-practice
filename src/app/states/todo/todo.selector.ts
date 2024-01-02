import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


export const selectTodoState = (state:AppState) =>  state.todos;

export const selectTodo = createSelector(
    selectTodoState,
    (state) =>  state
)

export const selectTodoItemType = createSelector(
    selectTodoState,
    (state) => state.todoType
)