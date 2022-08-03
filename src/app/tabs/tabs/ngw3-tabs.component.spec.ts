import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgW3TabsComponent } from './ngw3-tabs.component';

describe('NgW3TabsComponent', () => {
  let component: NgW3TabsComponent;
  let fixture: ComponentFixture<NgW3TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgW3TabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgW3TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
