import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OdHomePage } from './od-home.page';

describe('OdHomePage', () => {
  let component: OdHomePage;
  let fixture: ComponentFixture<OdHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OdHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
