import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProdsComponent } from './school-prods.component';

describe('SchoolProdsComponent', () => {
  let component: SchoolProdsComponent;
  let fixture: ComponentFixture<SchoolProdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolProdsComponent]
    });
    fixture = TestBed.createComponent(SchoolProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
