import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngw3CardFooterComponent } from './ngw3-card-footer.component';

describe('Ngw3CardFooterComponent', () => {
  let component: Ngw3CardFooterComponent;
  let fixture: ComponentFixture<Ngw3CardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngw3CardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngw3CardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
