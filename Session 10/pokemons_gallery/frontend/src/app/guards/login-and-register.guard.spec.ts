import { TestBed } from '@angular/core/testing';

import { LoginAndRegisterGuard } from './login-and-register.guard';

describe('LoginAndRegisterGuard', () => {
  let guard: LoginAndRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginAndRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
