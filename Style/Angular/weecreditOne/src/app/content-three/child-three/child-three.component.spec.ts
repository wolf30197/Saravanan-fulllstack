import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ChildOneComponent', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOneComponent]
    });
    fixture = TestBed.createComponent(ChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});