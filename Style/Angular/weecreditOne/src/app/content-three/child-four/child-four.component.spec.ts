import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoComponent } from './child-four.component';

describe('ChildTwoComponent', () => {
  let component: ChildTwoComponent;
  let fixture: ComponentFixture<ChildTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTwoComponent]
    });
    fixture = TestBed.createComponent(ChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
