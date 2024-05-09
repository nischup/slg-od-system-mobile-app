import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewODRequestPage } from './new-odrequest.page';

describe('NewODRequestPage', () => {
  let component: NewODRequestPage;
  let fixture: ComponentFixture<NewODRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewODRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
