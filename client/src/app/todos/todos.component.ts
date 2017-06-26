import { ITodo } from './../shared/models/ITodo.interface';
import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.getAll().subscribe((result) => {
      this.todos = result;
    })
  }

  addItem(item: string) {
    this.todoService.addTodo(item).subscribe();
  }

}
