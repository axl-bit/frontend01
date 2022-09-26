import { TestBed } from '@angular/core/testing';

import { TipopqtService } from './tipopqt.service';

describe('TipopqtService', () => {
  let service: TipopqtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipopqtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
