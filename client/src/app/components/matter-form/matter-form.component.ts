import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatterService } from 'src/app/services/matter.service';
import { Matter } from 'src/app/models/Matter';
@Component({
  selector: 'app-matter-form',
  templateUrl: './matter-form.component.html',
  styleUrls: ['./matter-form.component.css']
})
export class MatterFormComponent {
  matter : Matter = {
    idMatter:0,
    nameMatter:""
  };

  selectId: string = '';
  
  constructor(private matterService: MatterService, private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['idMatter'];
        if(id){
          this.matterService.getMatter(id).subscribe(
            es=>this.matter=es,
            this.selectId = id
          );
        }
      }
    )
  }
  update():void{
    this.matterService.updateMatter(this.selectId,this.matter).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewMatter(){
    //console.log(this.student);
    delete this.matter.idMatter;
  

    this.matterService.saveMatter(this.matter).subscribe(
      res => {console.log(res)},
      err => console.error(err)
      
    );
  }
}
