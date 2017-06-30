import {  select } from 'ng2-redux';
import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @select() isLoading;
  @select() error

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.loadTodos();
  }


}
