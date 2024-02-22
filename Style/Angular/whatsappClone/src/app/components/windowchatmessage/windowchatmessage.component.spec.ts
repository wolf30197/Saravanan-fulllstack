import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowchatmessageComponent } from './windowchatmessage.component';

describe('WindowchatmessageComponent', () => {
  let component: WindowchatmessageComponent;
  let fixture: ComponentFixture<WindowchatmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowchatmessageComponent]
    });
    fixture = TestBed.createComponent(WindowchatmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
