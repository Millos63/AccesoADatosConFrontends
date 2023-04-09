import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../models/Student'; 


import { Observable } from 'rxjs'; //rxjs es una biblioteca que me ayuda para programación reactiva, que va a reaccionar de acuerdo a lo que estas haciendo. Observable nos sirve para hacer representaciones visuales etc. Dependiendo de la biblioteca estas nos manejan notificaciones, esto es mas fácil para hacer codigo asincrono o de llamado a la pila. (Objetos)

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient){
  }
  //Metodo 
  getStudents()
  {
    return this.http.get(`${this.API_URI}/students`); 
  }
  getStudent(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/students/${id}`);
  }

  saveStudent(student: Student){
    return this.http.post(`${this.API_URI}/students`, student);
  }

  deleteStudent(id:string){
    return this.http.delete(`${this.API_URI}/students/${id}`);
  }

  updateStudent(id: string, student:Student):Observable<Student>{
    return this.http.put(`${this.API_URI}/students/${id}`, student)
  }
}

