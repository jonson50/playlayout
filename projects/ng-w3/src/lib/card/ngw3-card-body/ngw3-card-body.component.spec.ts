import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3CardBodyComponent } from './ngw3-card-body.component';

describe('Ngw3CardBodyComponent', () => {
  let component: Ngw3CardBodyComponent;
  let fixture: ComponentFixture<Ngw3CardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3CardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3CardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
