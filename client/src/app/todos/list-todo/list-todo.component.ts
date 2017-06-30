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


  @select() todos: ITodo[];

  constructor() { }




}
