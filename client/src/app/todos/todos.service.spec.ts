import { TestBed, inject } from '@angular/core/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService]
    });
  });

  it('should be created', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
