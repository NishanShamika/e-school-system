import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnncodeleteComponent } from './anncodelete.component';

describe('AnncodeleteComponent', () => {
  let component: AnncodeleteComponent;
  let fixture: ComponentFixture<AnncodeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnncodeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnncodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
