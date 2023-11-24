import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinputComponent } from './getinput.component';

describe('GetinputComponent', () => {
  let component: GetinputComponent;
  let fixture: ComponentFixture<GetinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetinputComponent]
    });
    fixture = TestBed.createComponent(GetinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
