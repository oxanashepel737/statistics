import { TestBed } from '@angular/core/testing';

import { ModerService } from './moder.service';

describe('ModerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModerService = TestBed.get(ModerService);
    expect(service).toBeTruthy();
  });
});
