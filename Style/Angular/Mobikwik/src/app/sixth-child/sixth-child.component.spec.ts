import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthChildComponent } from './sixth-child.component';

describe('SixthChildComponent', () => {
  let component: SixthChildComponent;
  let fixture: ComponentFixture<SixthChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthChildComponent]
    });
    fixture = TestBed.createComponent(SixthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
