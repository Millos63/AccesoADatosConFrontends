import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatterService } from 'src/app/services/matter.service';
@Component({
  selector: 'app-matter-list',
  templateUrl: './matter-list.component.html',
  styleUrls: ['./matter-list.component.css']
})
export class MatterListComponent {
  @HostBinding('class') classes = 'row';
  matters:any = [];
  
  constructor(private matterService: MatterService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.matterService.getMatters().subscribe(
      res => this.matters = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.matterService.deleteMatter(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
  
}
