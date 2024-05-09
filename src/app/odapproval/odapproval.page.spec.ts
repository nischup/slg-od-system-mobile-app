import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ODApprovalPage } from './odapproval.page';

describe('ODApprovalPage', () => {
  let component: ODApprovalPage;
  let fixture: ComponentFixture<ODApprovalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ODApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
