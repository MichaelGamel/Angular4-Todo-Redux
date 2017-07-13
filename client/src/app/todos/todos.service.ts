import { IAppState } from './../root.reducer';
import {
  FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR, FETCH_TODOS_LOADING,
  ADD_TODO_SUCCESS, ADD_TODO_LOADING, ADD_TODO_ERROR,
  DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR,
  TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_ERROR
} from './actions/todo.actions';
import { NgRedux } from 'ng2-redux';
import { ITodo } from './../shared/models/ITodo.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


@Injectable()
export class TodosService {

  constructor(private http: Http, private ngRedux: NgRedux<IAppState>) { }

  loadTodos() {
    this.ngRedux.dispatch({ type: FETCH_TODOS_LOADING });
    this.http.get('http://localhost:5000/api/todo').delay(800).subscribe((result) => {
      this.ngRedux.dispatch({ type: FETCH_TODOS_SUCCESS, todos: result.json() });
    }, (err) => {
      this.ngRedux.dispatch({ type: FETCH_TODOS_ERROR, error: err })
    })
  }

  addTodo(item: string) {
    this.ngRedux.dispatch({ type: ADD_TODO_LOADING });
    let todo: ITodo = { title: item, description: '', isCompleted: false };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:5000/api/todo', todo, options).delay(800).subscribe((result) => {
      this.ngRedux.dispatch({ type: ADD_TODO_SUCCESS, item: result.json() });
    }, (err) => {
      this.ngRedux.dispatch({ type: ADD_TODO_ERROR, error: err });
    })
  }

  deleteItem(todo: ITodo) {
    this.ngRedux.dispatch({ type: DELETE_TODO_LOADING });
    this.http.delete('http://localhost:5000/api/todo/' + todo._id).delay(800).subscribe((result) => {
      this.ngRedux.dispatch({ type: DELETE_TODO_SUCCESS, todo });
    }, (err) => {
      this.ngRedux.dispatch({ type: DELETE_TODO_ERROR, error: err })
    })
  }

  toggle(item: ITodo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO_LOADING });
    let todo: ITodo = { title: item.title, isCompleted: !item.isCompleted };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.put('http://localhost:5000/api/todo/' + item._id, todo, options).delay(800).subscribe((result) => {
      this.ngRedux.dispatch({ type: TOGGLE_TODO_SUCCESS, id: item._id });
    }, (err) => {
      this.ngRedux.dispatch({ type: TOGGLE_TODO_ERROR, error: err })
    })

  }

}
