import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  students:any = [];
  
  constructor(private studentsService: StudentsService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(
      res => this.students = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.studentsService.deleteStudent(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
  
}
