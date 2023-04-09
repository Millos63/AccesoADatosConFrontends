import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {
  student : Student = {
    id:0,
    firstName:"",
    lastName:"",
    photo:"",
    created_at: new Date()
  };

  selectedStudentId: string = '';
  
  constructor(private studentsService: StudentsService, private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.studentsService.getStudent(id).subscribe(
            es=>this.student=es,
            this.selectedStudentId = id
          );
        }
      }
    )
  }
  update():void{
    this.studentsService.updateStudent(this.selectedStudentId,this.student).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewStudent(){
    //console.log(this.student);
    delete this.student.id;
    delete this.student.created_at; 

    this.studentsService.saveStudent(this.student).subscribe(
      res => {console.log(res)},
      err => console.error(err)
      
    );
  }

  
}
