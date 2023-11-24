import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggoleElementComponent } from './toggole-element.component';

describe('ToggoleElementComponent', () => {
  let component: ToggoleElementComponent;
  let fixture: ComponentFixture<ToggoleElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggoleElementComponent]
    });
    fixture = TestBed.createComponent(ToggoleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
