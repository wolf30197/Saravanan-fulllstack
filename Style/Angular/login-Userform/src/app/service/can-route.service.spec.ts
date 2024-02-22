import { TestBed } from '@angular/core/testing';

import { CanRouteService } from './can-route.service';

describe('CanRouteService', () => {
  let service: CanRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
