import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade09Component } from './grade09.component';

describe('Grade09Component', () => {
  let component: Grade09Component;
  let fixture: ComponentFixture<Grade09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
