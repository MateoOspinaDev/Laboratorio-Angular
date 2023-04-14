
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../models/todoItem.model';
import { LocalStorageKeys } from '../models/LocalStorageKeys.enum';
@Injectable({
  providedIn: 'root'
})
export class TodolistItemsServiceService {

  private _todoListFromStorage$ = new BehaviorSubject<TodoItem[]>([]);
  actualList!:TodoItem[];
  todoListFromStorage$ = this._todoListFromStorage$.asObservable();

  constructor() {
    const localStorageList = this.getlocal;
    if (localStorageList && localStorageList.length > 0) {
      this._todoListFromStorage$.next(JSON.parse(localStorageList));
    }
    this.todoListFromStorage$.subscribe(items=>this.actualList=items);
   }

  saveItem(todoItemTitle: string) {
    if(todoItemTitle){
      let todoItem: TodoItem = {id:this.actualList.length+"",description: todoItemTitle,isDone:false};
      this.actualList.push(todoItem);
      this._todoListFromStorage$.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  deleteItem(id:string){
    if(id){
      const index = this.actualList.findIndex((obj: { id: string; }) => obj.id === id);
      this.actualList.splice(index, 1);
      this._todoListFromStorage$.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  editItem(id:string, todoItem: TodoItem){
    if(id){
      const index = this.actualList.findIndex((obj: { id: string; }) => obj.id === id);
      this.actualList[index] = todoItem;
      this._todoListFromStorage$.next(this.actualList);
      this.saveActualListInLocalStorage(this.actualList);
    }
  }

  clearCompleted(){
    this.actualList = this.actualList.filter((item: { isDone: boolean; }) => !item.isDone);
    this._todoListFromStorage$.next(this.actualList);
    this.saveActualListInLocalStorage(this.actualList);
  }

  filterByStatus(todoList:TodoItem[],status:string):TodoItem[]{
    let list:TodoItem[]=[];
    if(status == "pending"){
      list= this.actualList.filter((item) => !item.isDone);
    }
    if(status == "completed"){
      list= this.actualList.filter((item) => item.isDone);
    }
    if(status == "all"){
      list= this.actualList;
    }
    return list;
  }

  private getlocal = localStorage.getItem(LocalStorageKeys.MyDayKey);

  private saveActualListInLocalStorage(actualList:TodoItem[]){
    localStorage.setItem(LocalStorageKeys.MyDayKey, JSON.stringify(this.actualList));
  }
}
