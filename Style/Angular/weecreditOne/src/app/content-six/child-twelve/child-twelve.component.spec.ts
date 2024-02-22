import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwelveComponent } from './child-twelve.component';

describe('ChildTwelveComponent', () => {
  let component: ChildTwelveComponent;
  let fixture: ComponentFixture<ChildTwelveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTwelveComponent]
    });
    fixture = TestBed.createComponent(ChildTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
