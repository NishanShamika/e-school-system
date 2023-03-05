import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImagesGetComponent } from './user-images-get.component';

describe('UserImagesGetComponent', () => {
  let component: UserImagesGetComponent;
  let fixture: ComponentFixture<UserImagesGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImagesGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImagesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
