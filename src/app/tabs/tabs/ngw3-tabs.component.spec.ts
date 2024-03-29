import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3TabsComponent } from './ngw3-tabs.component';

describe('NgW3TabsComponent', () => {
  let component: Ngw3TabsComponent;
  let fixture: ComponentFixture<Ngw3TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3TabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
