import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoItem } from 'src/app/models/todoItem.model';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent {

  @Input() todoItem: TodoItem = {id:"",description: '',isDone:true};
  editing: boolean = false;
  inputEditField = new FormControl('');
  @ViewChild('editTodoInput') editTodoInput!: ElementRef;

  constructor(private todolistItemsServiceService: TodolistItemsServiceService) { }

  deleteTodoItem(){
    this.todolistItemsServiceService.deleteItem(this.todoItem.id)
  }

  activeEditTodoItem(){
    this.editing = true;
    setTimeout(() => {
      this.editTodoInput.nativeElement.focus();
    }, 0);
  }

  onEdit(){
    let inputField = this.inputEditField;
    if(inputField?.value == "" || inputField?.value == null){
      return;
    }else{
      let todoItemTitle:string = inputField.value.trim()
      inputField.setValue('')
      this.todolistItemsServiceService.editItemtitle(this.todoItem.id,todoItemTitle);
      this.editing = false;
    }
  }
}
