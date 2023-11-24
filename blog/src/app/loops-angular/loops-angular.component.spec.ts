import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopsAngularComponent } from './loops-angular.component';

describe('LoopsAngularComponent', () => {
  let component: LoopsAngularComponent;
  let fixture: ComponentFixture<LoopsAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoopsAngularComponent]
    });
    fixture = TestBed.createComponent(LoopsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
