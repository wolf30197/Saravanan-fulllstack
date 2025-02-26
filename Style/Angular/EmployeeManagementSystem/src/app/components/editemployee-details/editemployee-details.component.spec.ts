import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeeDetailsComponent } from './editemployee-details.component';

describe('EditemployeeDetailsComponent', () => {
  let component: EditemployeeDetailsComponent;
  let fixture: ComponentFixture<EditemployeeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditemployeeDetailsComponent]
    });
    fixture = TestBed.createComponent(EditemployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
