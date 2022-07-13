import { TestBed } from '@angular/core/testing';

import { NgW3Service } from './ng-w3.service';

describe('NgW3Service', () => {
  let service: NgW3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgW3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
