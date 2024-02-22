import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFourComponent } from './content-four.component';

describe('ContentFourComponent', () => {
  let component: ContentFourComponent;
  let fixture: ComponentFixture<ContentFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFourComponent]
    });
    fixture = TestBed.createComponent(ContentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
