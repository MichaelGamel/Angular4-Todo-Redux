import { ITodo } from './../../shared/models/ITodo.interface';
import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: ITodo[];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.getAll().subscribe((result) => {
      this.todos = result;
    })
  }

}
