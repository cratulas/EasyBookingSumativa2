import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionemailPage } from './confirmacionemail.page';

describe('ConfirmacionemailPage', () => {
  let component: ConfirmacionemailPage;
  let fixture: ComponentFixture<ConfirmacionemailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
