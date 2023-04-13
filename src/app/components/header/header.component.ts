import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodolistItemsServiceService } from 'src/app/services/todolist-items-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChild('todoInput') todoInput!: ElementRef;

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

  onSubmit(){
    let inputField = this.myForm.get('inputField');
    if(inputField?.value == "" || inputField?.value == null){
      return;
    }else{
      let todoItemTitle:string = inputField.value.trim()
      inputField.setValue('')
      this.todolistItemsServiceService.saveItem(todoItemTitle);
    }
  }
}
