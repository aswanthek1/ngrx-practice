import { createReducer, on } from "@ngrx/store";
import { TodoModel } from "../../shared/model/todoModel/todo.model";
import { filterTodos, loadTodos, loadTodosFailure, loadTodosSuccess } from "./todo.action";

export interface TodoState {
    todos: TodoModel[],
    loading:boolean,
    error: any,
    todoType:string | boolean
}

export const initalTodoState: TodoState = {
    todos: [],
    loading:false,
    error:null,
    todoType: 'all'
}


/// now create reducer functions

export const TodoReducer = createReducer(
    initalTodoState,
    on(loadTodos, state => ({
        ...state,
        loading:true,
        error:null
    })),
    on(loadTodosSuccess, (state, {data}) => (console.log(state.todoType, 'type are re'),{
        ...state,
        todos:data.filter((todo:TodoModel) => {return  todo.completed === state.todoType || state.todoType === 'all'}),
        loading:false,
        error:null
    })),
    on(loadTodosFailure, (state, {error}) => ({
        ...state,
        todos:[],
        loading:false,
        error:error
    })),
    on(filterTodos,(state, {todoType}) =>({
        ...state,
        todoType: todoType
    }))
)