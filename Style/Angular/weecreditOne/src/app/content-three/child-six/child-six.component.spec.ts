import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSixComponent } from './child-six.component';

describe('ChildSixComponent', () => {
  let component: ChildSixComponent;
  let fixture: ComponentFixture<ChildSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSixComponent]
    });
    fixture = TestBed.createComponent(ChildSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
