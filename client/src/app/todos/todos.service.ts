import { ITodo } from './../shared/models/ITodo.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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

  addTodo(item: string) {
    let todo: ITodo = { title: item, description: '' };

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:5000/api/todo', todo, options).map((res: Response) => {
      this.todos = res.json();
      return this.todos;
    })

  }

}
