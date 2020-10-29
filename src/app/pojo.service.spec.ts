import { TestBed } from '@angular/core/testing';

import { PojoService } from './pojo.service';

describe('PojoService', () => {
  let service: PojoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PojoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
