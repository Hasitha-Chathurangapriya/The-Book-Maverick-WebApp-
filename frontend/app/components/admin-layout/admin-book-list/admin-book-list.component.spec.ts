import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookListComponent } from './admin-book-list.component';

describe('AdminBookListComponent', () => {
  let component: AdminBookListComponent;
  let fixture: ComponentFixture<AdminBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookListComponent]
    });
    fixture = TestBed.createComponent(AdminBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
