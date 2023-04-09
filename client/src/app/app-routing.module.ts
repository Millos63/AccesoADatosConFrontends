import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';  //Con esta ruta podremos crear y modificar estudiantes
import { MatterListComponent } from './components/matter-list/matter-list.component';
import { MatterFormComponent } from './components/matter-form/matter-form.component';
import { StudentMatterListComponent } from './components/student-matter-list/student-matter-list.component';
import { StudentMatterFormComponent } from './components/student-matter-form/student-matter-form.component';


const routes: Routes = [  
  {path:'', redirectTo:'/students', pathMatch:'full'},
  {path:'students', component:StudentListComponent},
  {path:'students/add', component: StudentFormComponent},
  {path:'students/add/:id', component: StudentFormComponent},

  {path:'', redirectTo:'/matters', pathMatch:'full'},
  {path:'matters', component:MatterListComponent},
  {path:'matters/add', component: MatterFormComponent},
  {path:'matters/add/:idMatter', component: MatterFormComponent},

  {path:'', redirectTo:'/studentsMatters', pathMatch:'full'},
  {path:'studentsMatters', component:StudentMatterListComponent},
  {path:'studentsMatters/add', component: StudentMatterFormComponent},
  {path:'studentsMatters/add/:id/:idMatter', component: StudentMatterFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
