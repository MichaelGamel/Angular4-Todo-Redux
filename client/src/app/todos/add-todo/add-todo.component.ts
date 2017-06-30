import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.input-group', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query('.input-group', stagger('500ms', [
          animate('500ms 1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
        query('.input-group', [
          animate(1000, style('*'))
        ])
      ])
    ])
  ]
})
export class AddTodoComponent implements OnInit {

  @Output()
  sendItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit(item: HTMLInputElement) {
    this.sendItem.emit(item.value);
    item.value = '';
    item.focus();
  }

  send(e, item: HTMLInputElement) {
    if (e.keyCode === 13) {
      this.submit(item);
    }
  }

}
