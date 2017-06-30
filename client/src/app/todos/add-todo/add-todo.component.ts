import { TodosService } from './../todos.service';
import { IAppStore } from './../../store';
import { NgRedux } from 'ng2-redux';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ExplainerAnim } from '../../shared/animation/animate-inputs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  animations: ExplainerAnim
})
export class AddTodoComponent implements OnInit {

  @Output()
  sendItem: EventEmitter<string> = new EventEmitter<string>();

  constructor(private todoService: TodosService, private ngRedux: NgRedux<IAppStore>) { }

  ngOnInit() {
  }

  submit(item: HTMLInputElement) {
    this.todoService.addTodo(item.value);
    item.value = '';
    item.focus();
  }

  send(e, item: HTMLInputElement) {
    if (e.keyCode === 13) {
      this.submit(item);
    }
  }

}
