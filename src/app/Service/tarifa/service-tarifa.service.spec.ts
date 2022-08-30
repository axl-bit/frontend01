import { TestBed } from '@angular/core/testing';

import { ServiceTarifaService } from './service-tarifa.service';

describe('ServiceTarifaService', () => {
  let service: ServiceTarifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTarifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
