
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../models/todoItem.model';
import { LocalStorageKeys } from '../models/LocalStorageKeys.enum';
@Injectable({
  providedIn: 'root'
})
export class TodolistItemsServiceService {

  private todoListFromStorage = new BehaviorSubject<TodoItem[]>([]);
  actualList!:TodoItem[];
  todoListFromStorage$ = this.todoListFromStorage.asObservable();

  constructor() {
    const localStorageList = this.getlocal;
    if (localStorageList && localStorageList.length > 0) {
      this.todoListFromStorage.next(JSON.parse(localStorageList));
    }
    this.todoListFromStorage$.subscribe(items=>this.actualList=items);
   }

  saveItem(todoItemTitle: string) {
    if(todoItemTitle){
      let todoItem: TodoItem = {id:this.actualList.length+"",description: todoItemTitle,isDone:false};
      this.actualList.push(todoItem);
      this.todoListFromStorage.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  deleteItem(id:string){
    if(id){
      const index = this.actualList.findIndex((obj: { id: string; }) => obj.id === id);
      this.actualList.splice(index, 1);
      this.todoListFromStorage.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  editItemtitle(id:string, newTitle:string){
    if(id){
      const index = this.actualList.findIndex((obj: { id: string; }) => obj.id === id);
      this.actualList[index].description = newTitle;
      this.todoListFromStorage.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  editItemStatus(id:string, newStatus:boolean){
    if(id){
      const index = this.actualList.findIndex((obj: { id: string; }) => obj.id === id);
      this.actualList[index].isDone = newStatus;
      this.todoListFromStorage.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  private getlocal = localStorage.getItem(LocalStorageKeys.MyDayKey);

  private saveActualListInLocalStorage(actualList:TodoItem[]){
    localStorage.setItem(LocalStorageKeys.MyDayKey, JSON.stringify(this.actualList));
  }
}
