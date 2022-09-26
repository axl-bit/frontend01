import { TestBed } from '@angular/core/testing';

import { MotorizadoService } from './motorizado.service';

describe('MotorizadoService', () => {
  let service: MotorizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
