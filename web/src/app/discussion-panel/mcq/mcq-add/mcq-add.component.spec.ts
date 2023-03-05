import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqAddComponent } from './mcq-add.component';

describe('McqAddComponent', () => {
  let component: McqAddComponent;
  let fixture: ComponentFixture<McqAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
