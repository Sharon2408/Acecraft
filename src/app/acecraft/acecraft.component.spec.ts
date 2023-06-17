import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcecraftComponent } from './acecraft.component';

describe('AcecraftComponent', () => {
  let component: AcecraftComponent;
  let fixture: ComponentFixture<AcecraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcecraftComponent]
    });
    fixture = TestBed.createComponent(AcecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
