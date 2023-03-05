import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade10Component } from './grade10.component';

describe('Grade10Component', () => {
  let component: Grade10Component;
  let fixture: ComponentFixture<Grade10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
