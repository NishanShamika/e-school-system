import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade07Component } from './grade07.component';

describe('Grade07Component', () => {
  let component: Grade07Component;
  let fixture: ComponentFixture<Grade07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
