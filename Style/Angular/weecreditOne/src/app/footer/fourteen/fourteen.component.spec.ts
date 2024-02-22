import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenComponent } from './fourteen.component';

describe('FourteenComponent', () => {
  let component: FourteenComponent;
  let fixture: ComponentFixture<FourteenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourteenComponent]
    });
    fixture = TestBed.createComponent(FourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
