import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/models/todoItem.model';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent {

  @Input() todoItem: TodoItem = {id:"",description: '',isDone:true};

  constructor() { }

}
