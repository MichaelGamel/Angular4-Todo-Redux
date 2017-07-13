import { CompletedOnlyPipe } from './../shared/pipes/completed-count.pipe';
import { TodosService } from './todos.service';
import { TodosRoutingModule } from './todo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [TodosComponent, AddTodoComponent, ListTodoComponent, CompletedOnlyPipe],
  providers: [TodosService]
})
export class TodosModule { }
