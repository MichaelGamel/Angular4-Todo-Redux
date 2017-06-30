import { LOAD_TODOS } from './../actions/todo.actions';
import { IAppStore } from './../../store';
import { ListAnimation } from './../../shared/animation/animate-list-items';
import { ITodo } from './../../shared/models/ITodo.interface';
import { Component, Input, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  animations: ListAnimation
})
export class ListTodoComponent implements OnInit {


  @select() todos: ITodo[];

  constructor(private ngRedux: NgRedux<IAppStore>) { }

  ngOnInit() {
    this.ngRedux.dispatch({ type: LOAD_TODOS });
  }


}
