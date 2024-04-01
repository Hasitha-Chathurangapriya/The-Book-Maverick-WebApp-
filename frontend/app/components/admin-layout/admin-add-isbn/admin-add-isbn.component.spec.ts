import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddISBNComponent } from './admin-add-isbn.component';

describe('AdminAddISBNComponent', () => {
  let component: AdminAddISBNComponent;
  let fixture: ComponentFixture<AdminAddISBNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddISBNComponent]
    });
    fixture = TestBed.createComponent(AdminAddISBNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
