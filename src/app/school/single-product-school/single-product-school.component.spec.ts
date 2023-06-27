import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductSchoolComponent } from './single-product-school.component';

describe('SingleProductSchoolComponent', () => {
  let component: SingleProductSchoolComponent;
  let fixture: ComponentFixture<SingleProductSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProductSchoolComponent]
    });
    fixture = TestBed.createComponent(SingleProductSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
