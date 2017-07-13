import { IAppState } from './../root.reducer';
import { select } from 'ng2-redux';
import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @select((s: IAppState) => s.todo.isLoading) isLoading;
  @select((s: IAppState) => s.todo.error) error

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    
    this.todoService.loadTodos();
  }


}
