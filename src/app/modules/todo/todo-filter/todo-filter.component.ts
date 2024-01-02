import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { selectTodoItemType } from '../../../states/todo/todo.selector';
import { filterTodos, loadTodos } from '../../../states/todo/todo.action';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent implements OnInit {

  constructor(private store:Store<AppState>) {}

  todoType$: Observable<string|boolean> = this.store.select(selectTodoItemType)
  radioValue: string | boolean = 'all';

  ngOnInit(): void {
    this.todoType$.subscribe({
      next:(value:any) => {
        this.radioValue = value
      }
    })
  }

  onFilterChagne() {
    this.store.dispatch(filterTodos({todoType:this.radioValue}))
    this.store.dispatch(loadTodos())
  }
}
