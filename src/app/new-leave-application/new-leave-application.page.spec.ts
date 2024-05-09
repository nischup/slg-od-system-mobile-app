import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewLeaveApplicationPage } from './new-leave-application.page';

describe('NewLeaveApplicationPage', () => {
  let component: NewLeaveApplicationPage;
  let fixture: ComponentFixture<NewLeaveApplicationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewLeaveApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
