import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqReportHandlerComponent } from './mcq-report-handler.component';

describe('McqReportHandlerComponent', () => {
  let component: McqReportHandlerComponent;
  let fixture: ComponentFixture<McqReportHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McqReportHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McqReportHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
