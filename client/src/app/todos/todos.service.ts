import { FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, ADD_TODO_SUCCESS, ADD_TODO_LOADING, ADD_TODO_ERROR } from './actions/todo.actions';
import { IAppStore } from './../store';
import { NgRedux } from 'ng2-redux';
import { ITodo } from './../shared/models/ITodo.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


@Injectable()
export class TodosService {

  constructor(private http: Http, private ngRedux: NgRedux<IAppStore>) {

  }

  loadTodos() {
    this.ngRedux.dispatch({ type: FETCH_TODOS_LOADING });
    this.http.get('http://localhost:5000/api/todo').delay(2000).subscribe((result) => {
      this.ngRedux.dispatch({ type: FETCH_TODOS_SUCCESS, todos: result.json() });
    }, (err) => {
      this.ngRedux.dispatch({ type: FETCH_TODOS_ERROR, error: err })
    })
  }

  addTodo(item: string) {
    this.ngRedux.dispatch({ type: ADD_TODO_LOADING });
    let todo: ITodo = { title: item, description: '' };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:5000/api/todo', todo, options).delay(2000).subscribe((result) => {
      this.ngRedux.dispatch({ type: ADD_TODO_SUCCESS, item: result.json() });
    }, (err) => {
      this.ngRedux.dispatch({ type: ADD_TODO_ERROR, error: err });
    })

  }

}
