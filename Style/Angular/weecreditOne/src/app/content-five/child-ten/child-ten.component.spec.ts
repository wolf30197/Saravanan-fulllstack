import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTenComponent } from './child-ten.component';

describe('ChildTenComponent', () => {
  let component: ChildTenComponent;
  let fixture: ComponentFixture<ChildTenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTenComponent]
    });
    fixture = TestBed.createComponent(ChildTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
