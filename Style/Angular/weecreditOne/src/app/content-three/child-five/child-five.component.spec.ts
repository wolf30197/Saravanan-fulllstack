import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFiveComponent } from './child-five.component';

describe('ChildFiveComponent', () => {
  let component: ChildFiveComponent;
  let fixture: ComponentFixture<ChildFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildFiveComponent]
    });
    fixture = TestBed.createComponent(ChildFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
