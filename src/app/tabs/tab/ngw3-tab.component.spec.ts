import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgW3TabComponent } from './ngw3-tab.component';

describe('NgW3TabComponent', () => {
  let component: NgW3TabComponent;
  let fixture: ComponentFixture<NgW3TabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgW3TabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgW3TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
