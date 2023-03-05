import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatailsComponent } from './admin-datails.component';

describe('AdminDatailsComponent', () => {
  let component: AdminDatailsComponent;
  let fixture: ComponentFixture<AdminDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
