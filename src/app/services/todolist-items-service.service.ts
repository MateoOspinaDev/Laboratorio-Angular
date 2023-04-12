
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
    this.todoListFromStorage$.subscribe(v=>this.actualList=v);
   }

  saveItem(todoItem: TodoItem) {
    if(todoItem){
      this.actualList.push(todoItem);
      this.todoListFromStorage.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }


  // getItems(): TodoItem[] {
  //   let items: TodoItem[] = [];
  //   if(this.getlocal != null && this.getlocal != "") {
  //     items = JSON.parse(this.getlocal);
  //   }

  //   return items;
  // }

  // removeItem(description:string) {
  //   let items: TodoItem[] = [];
  //   if(this.getlocal != null && this.getlocal != "") {
  //     items = JSON.parse(this.getlocal);
  //     let index=items.findIndex(item => item.description==description);
  //     items.splice(index,1);
  //     localStorage.setItem(LocalStorageKeys.MyDayKey, JSON.stringify(items));
  //   }
  //   this.todoListFromStorage.next(items);
  // }

  private getlocal = localStorage.getItem(LocalStorageKeys.MyDayKey);

  private saveActualListInLocalStorage(actualList:TodoItem[]){
    localStorage.setItem(LocalStorageKeys.MyDayKey, JSON.stringify(this.actualList));
  }
}
