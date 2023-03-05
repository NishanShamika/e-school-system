import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPanelComponent } from './discussion-panel.component';

describe('DiscussionPanelComponent', () => {
  let component: DiscussionPanelComponent;
  let fixture: ComponentFixture<DiscussionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
