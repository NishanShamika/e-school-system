import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade08Component } from './grade08.component';

describe('Grade08Component', () => {
  let component: Grade08Component;
  let fixture: ComponentFixture<Grade08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
