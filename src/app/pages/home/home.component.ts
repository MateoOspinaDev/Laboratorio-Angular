import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from 'src/app/models/todoItem.model';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  actualTodoList: TodoItem[]  = [];
  todoList: TodoItem[]  = [];
  currentRoute: string | null = null;

  constructor (private todolistItemsServiceService: TodolistItemsServiceService,private route: ActivatedRoute
    ) { }

  ngOnInit(): void{
    this.todolistItemsServiceService.todoListFromStorage$.subscribe((v)=>{
      this.todoList=v;
    });
    this.route.paramMap.subscribe(params => {
      this.currentRoute = params.get('filterPath');
      if(this.currentRoute==null){
        this.currentRoute = 'all';
      }
      this.actualTodoList=this.todolistItemsServiceService.filterByStatus(this.todoList,this.currentRoute);
    });
  }
}



