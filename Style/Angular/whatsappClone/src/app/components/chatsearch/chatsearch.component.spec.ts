import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsearchComponent } from './chatsearch.component';

describe('ChatsearchComponent', () => {
  let component: ChatsearchComponent;
  let fixture: ComponentFixture<ChatsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatsearchComponent]
    });
    fixture = TestBed.createComponent(ChatsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
