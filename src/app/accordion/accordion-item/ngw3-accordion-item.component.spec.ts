import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3AccordionItemComponent } from './ngw3-accordion-item.component';

describe('Ngw3AccordionItemComponent', () => {
  let component: Ngw3AccordionItemComponent;
  let fixture: ComponentFixture<Ngw3AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3AccordionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
