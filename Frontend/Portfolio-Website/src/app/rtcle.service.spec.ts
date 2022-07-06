import { TestBed } from '@angular/core/testing';

import { RtcleService } from './rtcle.service';

describe('RtcleService', () => {
  let service: RtcleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtcleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
