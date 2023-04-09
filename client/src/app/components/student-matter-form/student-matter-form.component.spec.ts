import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMatterFormComponent } from './student-matter-form.component';

describe('StudentMatterFormComponent', () => {
  let component: StudentMatterFormComponent;
  let fixture: ComponentFixture<StudentMatterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMatterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMatterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
