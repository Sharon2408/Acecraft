import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolProductsComponent } from './view-school-products.component';

describe('ViewSchoolProductsComponent', () => {
  let component: ViewSchoolProductsComponent;
  let fixture: ComponentFixture<ViewSchoolProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSchoolProductsComponent]
    });
    fixture = TestBed.createComponent(ViewSchoolProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
