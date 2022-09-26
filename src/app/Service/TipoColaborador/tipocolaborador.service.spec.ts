import { TestBed } from '@angular/core/testing';

import { TipocolaboradorService } from './tipocolaborador.service';

describe('TipocolaboradorService', () => {
  let service: TipocolaboradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipocolaboradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
