import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  todoItemsCounterIsntDone: number = 0;
  todoItemsCounterIsDone: number = 0;
  todoItemsCounterDescription: string = '';

  constructor(
    private todolistItemsServiceService:TodolistItemsServiceService
    ) { }
  ngOnInit(): void {
    this.todolistItemsServiceService.todoListFromStorage$.subscribe((v) => {
      this.todoItemsCounterIsntDone = v.filter((item) => !item.isDone).length;
      this.todoItemsCounterIsDone = v.filter((item) => item.isDone).length;
      this.todoItemsCounterDescription = this.todoItemsCounterIsntDone == 1
          ? ` item left`
          : ` items left`;
    });
  }

  clearCompleted(){
    this.todolistItemsServiceService.clearCompleted();
  }


  //<strong>0</strong> item left
}
