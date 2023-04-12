import { TestBed } from '@angular/core/testing';

import { TodolistItemsServiceService } from './todolist-items-service.service';

describe('TodolistItemsServiceService', () => {
  let service: TodolistItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
