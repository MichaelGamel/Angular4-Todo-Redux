import { ITodo } from './shared/models/ITodo.interface';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: ITodo[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/api').map((response: Response) => {
      let result = response.json();
      console.log(result);
      this.todos = result;
    }).subscribe();
  }

}
