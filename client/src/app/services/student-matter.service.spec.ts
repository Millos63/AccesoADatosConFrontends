import { TestBed } from '@angular/core/testing';

import { StudentMatterService } from './student-matter.service';

describe('StudentMatterService', () => {
  let service: StudentMatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
