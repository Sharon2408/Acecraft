import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingAccessoriesThatComplementYourFormalWearComponent } from './styling-accessories-that-complement-your-formal-wear.component';

describe('StylingAccessoriesThatComplementYourFormalWearComponent', () => {
  let component: StylingAccessoriesThatComplementYourFormalWearComponent;
  let fixture: ComponentFixture<StylingAccessoriesThatComplementYourFormalWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylingAccessoriesThatComplementYourFormalWearComponent]
    });
    fixture = TestBed.createComponent(StylingAccessoriesThatComplementYourFormalWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
