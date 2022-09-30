import { TestBed } from '@angular/core/testing';

import { ServicioautomatizadoService } from './servicioautomatizado.service';

describe('ServicioautomatizadoService', () => {
  let service: ServicioautomatizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioautomatizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
