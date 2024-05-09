import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyODRequestPage } from './my-odrequest.page';

describe('MyODRequestPage', () => {
  let component: MyODRequestPage;
  let fixture: ComponentFixture<MyODRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyODRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
