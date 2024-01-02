import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { TodoModel } from '../shared/model/todoModel/todo.model';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {

  getAllTodo():Observable<TodoModel[]> {
     return this.http.get<TodoModel[]>("https://jsonplaceholder.typicode.com/todos")
  }

  constructor(private http: HttpClient) { }
}
