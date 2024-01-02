import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { loadTodos } from '../../states/todo/todo.action';
import { Observable } from 'rxjs';
import { selectTodo } from '../../states/todo/todo.selector';
import { CommonModule } from '@angular/common';
import { TodoState } from '../../states/todo/todo.reducer';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoFilterComponent, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todos$: Observable<TodoState> = this.store.select(selectTodo);

  todoObj!:TodoState;

  constructor(private store: Store<AppState>, private router:Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
    this.todos$.subscribe({
      next:(data:TodoState) => {
        if(data.error !== null) {
          alert('Something went wrong!')
          this.router.navigate([''])
        }
        else {
          this.todoObj = data
        }
      },
      error(err:any) {
        console.log(err)
        alert('Something went wrong!')
      },
    })
  }

}
