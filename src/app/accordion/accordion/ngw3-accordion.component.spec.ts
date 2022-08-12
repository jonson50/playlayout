import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3AccordionComponent } from './ngw3-accordion.component';

describe('Ngw3AccordionComponent', () => {
  let component: Ngw3AccordionComponent;
  let fixture: ComponentFixture<Ngw3AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3AccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
