import { TestBed } from '@angular/core/testing';

import { ResolvingServerService } from './resolving-server.service';

describe('ResolvingServerService', () => {
  let service: ResolvingServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolvingServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
