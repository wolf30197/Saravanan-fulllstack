import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthChildComponent } from './fifth-child.component';

describe('FifthChildComponent', () => {
  let component: FifthChildComponent;
  let fixture: ComponentFixture<FifthChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthChildComponent]
    });
    fixture = TestBed.createComponent(FifthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
