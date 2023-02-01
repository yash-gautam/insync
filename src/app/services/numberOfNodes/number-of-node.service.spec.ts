import { TestBed } from '@angular/core/testing';

import { NumberOfNodeService } from './number-of-node.service';

describe('NumberOfNodeService', () => {
  let service: NumberOfNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberOfNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
