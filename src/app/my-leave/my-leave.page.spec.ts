import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLeavePage } from './my-leave.page';

describe('MyLeavePage', () => {
  let component: MyLeavePage;
  let fixture: ComponentFixture<MyLeavePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyLeavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
