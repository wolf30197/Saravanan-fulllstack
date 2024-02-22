import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagefooterComponent } from './messagefooter.component';

describe('MessagefooterComponent', () => {
  let component: MessagefooterComponent;
  let fixture: ComponentFixture<MessagefooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagefooterComponent]
    });
    fixture = TestBed.createComponent(MessagefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
