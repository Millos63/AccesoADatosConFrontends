import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentMatterService } from 'src/app/services/student-matter.service';
import { StudentMatter } from 'src/app/models/StudentMatter';

@Component({
  selector: 'app-student-matter-list',
  templateUrl: './student-matter-list.component.html',
  styleUrls: ['./student-matter-list.component.css']
})
export class StudentMatterListComponent {
  @HostBinding('class') classes = 'row';
  studentsMatters:any = [];

  constructor(private studentMatterService: StudentMatterService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.studentMatterService.getStudentsMatters().subscribe(
      res => this.studentsMatters = res,
      err => console.error(err)
    );
  }

  delete(id:string, idMatter:string){
    this.studentMatterService.deleteStudentMatter(id, idMatter).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}
