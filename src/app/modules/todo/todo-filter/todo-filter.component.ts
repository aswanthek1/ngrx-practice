import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { selectTodo } from '../../../states/todo/todo.selector';
import { filterTodos, loadTodos } from '../../../states/todo/todo.action';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoState } from '../../../states/todo/todo.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent implements OnInit {

  constructor(private store:Store<AppState>, private router:Router) {}

  todos$: Observable<TodoState> = this.store.select(selectTodo)
  radioValue: string | boolean = 'all';

  ngOnInit(): void {
    this.todos$.subscribe({
      next: (data:TodoState) => {
        if(data.error) {
          alert('Something went wrong!')
          this.router.navigate([''])
        }
        else {
          this.radioValue = data.todoType
        }
      }
    })
  }

  onFilterChagne() {
    this.store.dispatch(filterTodos({todoType:this.radioValue}))
    this.store.dispatch(loadTodos())
  }
}
