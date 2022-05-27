import { TestBed } from '@angular/core/testing';

import { ResolvingGuard } from './resolving.guard';

describe('ResolvingGuard', () => {
  let guard: ResolvingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolvingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
