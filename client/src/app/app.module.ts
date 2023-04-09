import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentsService } from './services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatterFormComponent } from './components/matter-form/matter-form.component';
import { MatterListComponent } from './components/matter-list/matter-list.component';
import { MatterService } from './services/matter.service';
import { StudentMatterFormComponent } from './components/student-matter-form/student-matter-form.component';
import { StudentMatterListComponent } from './components/student-matter-list/student-matter-list.component';
import { StudentMatterService } from './services/student-matter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentFormComponent,
    StudentListComponent,
    MatterFormComponent,
    MatterListComponent,
    StudentMatterFormComponent,
    StudentMatterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentsService,MatterService, StudentMatterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
