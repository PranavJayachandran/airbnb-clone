import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPriceDisplayComponent } from './final-price-display.component';

describe('FinalPriceDisplayComponent', () => {
  let component: FinalPriceDisplayComponent;
  let fixture: ComponentFixture<FinalPriceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalPriceDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalPriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
