import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNineComponent } from './child-nine.component';

describe('ChildNineComponent', () => {
  let component: ChildNineComponent;
  let fixture: ComponentFixture<ChildNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildNineComponent]
    });
    fixture = TestBed.createComponent(ChildNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
