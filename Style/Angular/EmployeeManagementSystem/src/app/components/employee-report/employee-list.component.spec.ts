import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistComponent } from './employee-list.component';

describe('EmployeeReportComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeelistComponent]
    });
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
