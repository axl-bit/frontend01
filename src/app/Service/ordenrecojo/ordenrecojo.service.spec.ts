import { TestBed } from '@angular/core/testing';

import { OrdenrecojoService } from './ordenrecojo.service';

describe('OrdenrecojoService', () => {
  let service: OrdenrecojoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenrecojoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
