import { IAppState } from './../../root.reducer';
import { TodosService } from './../todos.service';
import { ListAnimation } from './../../shared/animation/animate-list-items';
import { ITodo } from './../../shared/models/ITodo.interface';
import { Component, Input } from '@angular/core';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  animations: ListAnimation
})
export class ListTodoComponent {


  @select((s: IAppState) => s.todo.todos) todos: ITodo[];

  constructor(private todoService: TodosService) { }

  deleteItem(todo: ITodo) {
    this.todoService.deleteItem(todo);
  }

  toggleTodo(todo) {
    this.todoService.toggle(todo);
  }


}
