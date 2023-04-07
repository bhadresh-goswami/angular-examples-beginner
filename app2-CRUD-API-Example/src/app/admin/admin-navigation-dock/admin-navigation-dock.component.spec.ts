import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationDockComponent } from './admin-navigation-dock.component';

describe('AdminNavigationDockComponent', () => {
  let component: AdminNavigationDockComponent;
  let fixture: ComponentFixture<AdminNavigationDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavigationDockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavigationDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
