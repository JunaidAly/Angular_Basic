import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentDataComponent } from './child-parent-data.component';

describe('ChildParentDataComponent', () => {
  let component: ChildParentDataComponent;
  let fixture: ComponentFixture<ChildParentDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildParentDataComponent]
    });
    fixture = TestBed.createComponent(ChildParentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
