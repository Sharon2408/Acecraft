import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewProductsComponent } from './school-view-products.component';

describe('SchoolViewProductsComponent', () => {
  let component: SchoolViewProductsComponent;
  let fixture: ComponentFixture<SchoolViewProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolViewProductsComponent]
    });
    fixture = TestBed.createComponent(SchoolViewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
