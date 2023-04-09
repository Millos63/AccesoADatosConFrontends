import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMatterListComponent } from './student-matter-list.component';

describe('StudentMatterListComponent', () => {
  let component: StudentMatterListComponent;
  let fixture: ComponentFixture<StudentMatterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMatterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMatterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
