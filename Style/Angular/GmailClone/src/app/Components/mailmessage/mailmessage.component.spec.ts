import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailmessageComponent } from './mailmessage.component';

describe('MailmessageComponent', () => {
  let component: MailmessageComponent;
  let fixture: ComponentFixture<MailmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailmessageComponent]
    });
    fixture = TestBed.createComponent(MailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
