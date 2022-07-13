import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgW3Component } from './ng-w3.component';

describe('NgW3Component', () => {
  let component: NgW3Component;
  let fixture: ComponentFixture<NgW3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgW3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgW3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
