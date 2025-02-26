import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { sanityGuard } from './sanity.guard';

describe('sanityGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sanityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
