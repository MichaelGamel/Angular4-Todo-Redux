import { ITodo } from './../../shared/models/ITodo.interface';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {

  @Input()
  todos: ITodo[];

  constructor() { }



}
