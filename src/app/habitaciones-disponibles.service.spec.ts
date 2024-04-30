import { TestBed } from '@angular/core/testing';

import { HabitacionesDisponiblesService } from './habitaciones-disponibles.service';

describe('HabitacionesDisponiblesService', () => {
  let service: HabitacionesDisponiblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitacionesDisponiblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
