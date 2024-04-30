import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Caja1Page } from './caja1.page';

describe('Caja1Page', () => {
  let component: Caja1Page;
  let fixture: ComponentFixture<Caja1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Caja1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
