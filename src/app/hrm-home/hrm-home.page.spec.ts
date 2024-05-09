import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrmHomePage } from './hrm-home.page';

describe('HrmHomePage', () => {
  let component: HrmHomePage;
  let fixture: ComponentFixture<HrmHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HrmHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
