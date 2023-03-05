import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationModalComponent } from './congratulation-modal.component';

describe('CongratulationModalComponent', () => {
  let component: CongratulationModalComponent;
  let fixture: ComponentFixture<CongratulationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratulationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
