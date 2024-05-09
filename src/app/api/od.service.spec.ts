import { TestBed } from '@angular/core/testing';

import { OdService } from './od.service';

describe('OdService', () => {
  let service: OdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
