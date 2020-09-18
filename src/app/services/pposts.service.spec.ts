import { TestBed } from '@angular/core/testing';

import { PpostsService } from './pposts.service';

describe('PpostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PpostsService = TestBed.get(PpostsService);
    expect(service).toBeTruthy();
  });
});
