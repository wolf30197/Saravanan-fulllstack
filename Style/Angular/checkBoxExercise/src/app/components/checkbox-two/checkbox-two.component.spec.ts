import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTwoComponent } from './checkbox-two.component';

describe('CheckboxTwoComponent', () => {
  let component: CheckboxTwoComponent;
  let fixture: ComponentFixture<CheckboxTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxTwoComponent]
    });
    fixture = TestBed.createComponent(CheckboxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
