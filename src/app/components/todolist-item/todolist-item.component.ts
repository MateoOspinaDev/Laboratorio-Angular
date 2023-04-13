import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TodoItem } from 'src/app/models/todoItem.model';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent {

  @Input() todoItem: TodoItem = {id:"",description: '',isDone:true};

  constructor(private todolistItemsServiceService: TodolistItemsServiceService) { }

  deleteTodoItem(){
    this.todolistItemsServiceService.deleteItem(this.todoItem.id)
  }


}
