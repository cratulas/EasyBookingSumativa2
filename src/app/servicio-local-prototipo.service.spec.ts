import { TestBed } from '@angular/core/testing';

import { ServicioLocalPrototipoService } from './servicio-local-prototipo.service';

describe('ServicioLocalPrototipoService', () => {
  let service: ServicioLocalPrototipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLocalPrototipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
