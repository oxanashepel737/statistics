import { TestBed, async, inject } from '@angular/core/testing';

import { AuthokToItemsGuard } from './authok-to-items.guard';

describe('AuthokToItemsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthokToItemsGuard]
    });
  });

  it('should ...', inject([AuthokToItemsGuard], (guard: AuthokToItemsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
