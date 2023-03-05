import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceCreateComponent } from './announce-create.component';

describe('AnnounceCreateComponent', () => {
  let component: AnnounceCreateComponent;
  let fixture: ComponentFixture<AnnounceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
