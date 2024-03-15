import { TestBed } from '@angular/core/testing';

import { NovoUsuarioService } from './signin.service';

describe('NovoUsuarioService', () => {
  let service: NovoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
