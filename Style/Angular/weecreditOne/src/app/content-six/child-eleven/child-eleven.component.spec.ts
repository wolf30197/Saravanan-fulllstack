import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildElevenComponent } from './child-eleven.component';

describe('ChildElevenComponent', () => {
  let component: ChildElevenComponent;
  let fixture: ComponentFixture<ChildElevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildElevenComponent]
    });
    fixture = TestBed.createComponent(ChildElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
