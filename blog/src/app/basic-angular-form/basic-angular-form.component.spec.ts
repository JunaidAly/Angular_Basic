import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAngularFormComponent } from './basic-angular-form.component';

describe('BasicAngularFormComponent', () => {
  let component: BasicAngularFormComponent;
  let fixture: ComponentFixture<BasicAngularFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicAngularFormComponent]
    });
    fixture = TestBed.createComponent(BasicAngularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
