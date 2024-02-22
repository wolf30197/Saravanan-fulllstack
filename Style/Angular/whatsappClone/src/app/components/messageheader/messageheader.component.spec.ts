import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageheaderComponent } from './messageheader.component';

describe('MessageheaderComponent', () => {
  let component: MessageheaderComponent;
  let fixture: ComponentFixture<MessageheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageheaderComponent]
    });
    fixture = TestBed.createComponent(MessageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
