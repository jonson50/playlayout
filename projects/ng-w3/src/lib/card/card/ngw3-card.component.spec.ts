import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3CardComponent } from './ngw3-card.component';

describe('CardComponent', () => {
  let component: Ngw3CardComponent;
  let fixture: ComponentFixture<Ngw3CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
