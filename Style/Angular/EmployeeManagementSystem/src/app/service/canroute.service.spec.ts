import { TestBed } from '@angular/core/testing';

import { CanrouteService } from './canroute.service';

describe('CanrouteService', () => {
  let service: CanrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
