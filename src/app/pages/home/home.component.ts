import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todoItem.model';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  actualTodoList: TodoItem[] = [];
  todoList: TodoItem[] = [];
  currentRoute: string = '';
  sub!: any;

  constructor (private todolistItemsServiceService: TodolistItemsServiceService) { }

  ngOnInit() {
    this.todolistItemsServiceService.todoListFromStorage$.subscribe(v=>this.actualTodoList=v);
  }
}
