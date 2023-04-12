import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacingRequestComponent } from './placing-request.component';

describe('PlacingRequestComponent', () => {
  let component: PlacingRequestComponent;
  let fixture: ComponentFixture<PlacingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
