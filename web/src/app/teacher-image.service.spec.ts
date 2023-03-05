import { TestBed } from '@angular/core/testing';

import { TeacherImageService } from './teacher-image.service';

describe('TeacherImageService', () => {
  let service: TeacherImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
