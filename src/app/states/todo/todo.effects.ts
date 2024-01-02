import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EffectsService } from "../../service/effects.service";
import { catchError, exhaustMap, filter, map, of } from "rxjs";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from "./todo.action";



@Injectable()
export class TodosEffects {
    loadTodos$ = createEffect(() => 
      this.actions$.pipe(
        ofType(loadTodos),
        exhaustMap(() => this.effectsService.getAllTodo().pipe(
            map(todos => loadTodosSuccess({data:todos})),
            catchError((error) => of(loadTodosFailure({error:'[Todos API] Todos Loaded Error :'+ error})))
        ))
      )
    )

    // .filter((todo:any) => {return todo.completed === true})

constructor(private actions$: Actions, private effectsService: EffectsService) {}

}