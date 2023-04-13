import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TodoItem } from 'src/app/models/todoItem.model';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent {

  @Input() todoItem: TodoItem = {id:"",description: '',isDone:true};
  isLabelHovered: boolean = false;

  constructor() { }

  onMouseOver(){
    this.isLabelHovered = true;
  }

  onMouseOut(){
    this.isLabelHovered = false;
  }

}
