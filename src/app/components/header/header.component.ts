import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';
import { TodoItem } from 'src/app/models/todoItem.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChild('todoInput') todoInput!: ElementRef;

  // input todo field
  //todoItemField = new FormControl('');
  myForm = new FormGroup({
    inputField: new FormControl('')
  });


  constructor(
    private todolistItemsServiceService:TodolistItemsServiceService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
    this.todoInput.nativeElement.focus();
  }, 0);
  }

  // addTodo(){
  //   if(this.todoItemField.value == "" || this.todoItemField.value == null){
  //     return;
  //   }else{
  //     let todoItem:TodoItem = {
  //       description: this.todoItemField.value
  //     }
  //     this.todolistItemsServiceService.saveItem(todoItem);
  //   }
  // }

  onSubmit(){
    let inputField = this.myForm.get('inputField')?.value?.trim();
    if(inputField == "" || inputField == null){
      return;
    }else{
      let todoItem:TodoItem = {
        description: inputField
      }
      //this.myForm.get('inputField')?.setValue('')
      this.todolistItemsServiceService.saveItem(todoItem);
    }
  }

}
