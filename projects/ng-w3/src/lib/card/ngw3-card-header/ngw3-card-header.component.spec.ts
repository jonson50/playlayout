import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3CardHeaderComponent } from './ngw3-card-header.component';

describe('Ngw3CardHeaderComponent', () => {
  let component: Ngw3CardHeaderComponent;
  let fixture: ComponentFixture<Ngw3CardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3CardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3CardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
