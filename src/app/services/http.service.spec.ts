import { TestBed } from '@angular/core/testing';

import { ShotService } from './shot.service';

describe('ShotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShotService = TestBed.get(ShotService);
    expect(service).toBeTruthy();
  });
});
