import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqSubjectsComponent } from './mcq-subjects.component';

describe('McqSubjectsComponent', () => {
  let component: McqSubjectsComponent;
  let fixture: ComponentFixture<McqSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
