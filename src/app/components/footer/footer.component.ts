import { Component, OnInit } from '@angular/core';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  todoItemsCounter: number = 0;
  todoItemsCounterDescription: string = '';

  constructor(private todolistItemsServiceService:TodolistItemsServiceService) { }
  ngOnInit(): void {
    this.todolistItemsServiceService.todoListFromStorage$.subscribe((v) => {
      this.todoItemsCounter = v.length;
      this.todoItemsCounterDescription =
        this.todoItemsCounter == 1
          ? ` item left`
          : ` items left`;
    });
  }

  clearCompleted(){
    this.todolistItemsServiceService.clearCompleted();
  }


  //<strong>0</strong> item left
}
