import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqDeleteComponent } from './mcq-delete.component';

describe('McqDeleteComponent', () => {
  let component: McqDeleteComponent;
  let fixture: ComponentFixture<McqDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
