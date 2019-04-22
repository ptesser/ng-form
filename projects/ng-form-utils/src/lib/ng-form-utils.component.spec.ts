import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormUtilsComponent } from './ng-form-utils.component';

describe('NgFormUtilsComponent', () => {
  let component: NgFormUtilsComponent;
  let fixture: ComponentFixture<NgFormUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormUtilsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
