import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StudentMatter } from '../models/StudentMatter'; 


import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class StudentMatterService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient){
  }
  //Metodo 
  getStudentsMatters()
  {
    return this.http.get(`${this.API_URI}/studentsMatters`); 
  }
  getStudentMatter(id: string, idMatter: string){
    return this.http.get(`${this.API_URI}/studentsMatters/${id}/${idMatter}`);
  }


  getStudents(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/studentsMatters/student/${id}`);
  }
  getMatters(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/studentsMatters/matter/${id}`);
  }

  saveStudentMatter(studentMatter: StudentMatter){
    return this.http.post(`${this.API_URI}/studentsMatters`, studentMatter);
  }

  deleteStudentMatter(id:string, idMatter:string){
    return this.http.delete(`${this.API_URI}/studentsMatters/${id}/${idMatter}`);
  }

  updateStudentMatter(id: string, idMatter:string, studentMatter:StudentMatter):Observable<StudentMatter>{
    return this.http.put(`${this.API_URI}/studentsMatters/${id}/${idMatter}`, studentMatter)
  }
}
