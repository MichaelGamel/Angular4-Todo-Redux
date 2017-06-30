import { ITodo } from './../../shared/models/ITodo.interface';
import { Component, Input } from '@angular/core';
import { trigger, style, transition, keyframes, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true })

      ])
    ])
  ]
})
export class ListTodoComponent {

  @Input()
  todos: ITodo[];

  constructor() { }



}
