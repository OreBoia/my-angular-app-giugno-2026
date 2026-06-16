import { TestBed } from '@angular/core/testing';

import { TaskRestService } from './task-rest-service';

describe('TaskRestService', () => {
  let service: TaskRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
