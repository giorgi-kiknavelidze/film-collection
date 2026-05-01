import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { filmFoundGuard } from './film-found-guard';

describe('filmFoundGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => filmFoundGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
