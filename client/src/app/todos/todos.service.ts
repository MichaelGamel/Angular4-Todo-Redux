import { ITodo } from './../shared/models/ITodo.interface';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TodosService {

  todos: ITodo[];

  constructor(private http: Http) {

  }

  getAll() {
    return this.http.get('http://localhost:5000/api/todo').map((res: Response) => {
      this.todos = res.json();
      return this.todos;
    })
  }

}
