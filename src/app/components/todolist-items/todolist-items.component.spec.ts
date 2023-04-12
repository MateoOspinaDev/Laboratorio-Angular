import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistItemsComponent } from './todolist-items.component';

describe('TodolistItemsComponent', () => {
  let component: TodolistItemsComponent;
  let fixture: ComponentFixture<TodolistItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
