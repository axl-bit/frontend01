import { TestBed } from '@angular/core/testing';

import { OrdenentregaService } from './ordenentrega.service';

describe('OrdenentregaService', () => {
  let service: OrdenentregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenentregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
