import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveDeptApprovalPage } from './leave-dept-approval.page';

describe('LeaveDeptApprovalPage', () => {
  let component: LeaveDeptApprovalPage;
  let fixture: ComponentFixture<LeaveDeptApprovalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeaveDeptApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
