import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade06Component } from './grade06.component';

describe('Grade06Component', () => {
  let component: Grade06Component;
  let fixture: ComponentFixture<Grade06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
