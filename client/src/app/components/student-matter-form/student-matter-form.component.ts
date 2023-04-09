import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentMatter } from 'src/app/models/StudentMatter';
import { StudentMatterService } from 'src/app/services/student-matter.service';

@Component({
  selector: 'app-student-matter-form',
  templateUrl: './student-matter-form.component.html',
  styleUrls: ['./student-matter-form.component.css']
})
export class StudentMatterFormComponent {
  studentMatter : StudentMatter = {
    id:0,
    idMatter:0,
    created_at: new Date()
  };

  selectedStudentId: string = '';
  selectedMatterId: string = '';
  constructor(private studentMatterService: StudentMatterService, private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        let idMatter = e['idMatter'];
        if(id & idMatter){
          this.studentMatterService.getStudentMatter(id, idMatter).subscribe(
            es=>this.studentMatter=es,
            this.selectedStudentId = id,
            this.selectedMatterId = idMatter
          );
        }
      }
    )
  }
  
  update():void{
    this.studentMatterService.updateStudentMatter(this.selectedStudentId,this. selectedMatterId,this.studentMatter).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewStudentMatter(){
    //console.log(this.student);
    delete this.studentMatter.created_at; 

    this.studentMatterService.saveStudentMatter(this.studentMatter).subscribe(
      res => {console.log(res)},
      err => console.error(err)
      
    );
  }
}
