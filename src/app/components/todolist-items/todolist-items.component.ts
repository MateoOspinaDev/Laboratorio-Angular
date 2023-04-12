import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/models/todoItem.model';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-todolist-items',
  templateUrl: './todolist-items.component.html',
  styleUrls: ['./todolist-items.component.css']
})
export class TodolistItemsComponent implements OnInit{

  @Input() items: TodoItem[]=[];

  constructor(private todoListService: TodolistItemsServiceService) {
  }

  ngOnInit(): void {

  }


}
