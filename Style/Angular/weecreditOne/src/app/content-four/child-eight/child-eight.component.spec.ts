import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEightComponent } from './child-eight.component';

describe('ChildEightComponent', () => {
  let component: ChildEightComponent;
  let fixture: ComponentFixture<ChildEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildEightComponent]
    });
    fixture = TestBed.createComponent(ChildEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
