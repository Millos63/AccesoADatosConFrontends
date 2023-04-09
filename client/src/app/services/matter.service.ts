import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matter } from '../models/Matter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatterService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient){
  }
  //Metodo 
  getMatters()
  {
    return this.http.get(`${this.API_URI}/matters`); 
  }
  getMatter(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/matters/${id}`);
  }

  saveMatter(matter: Matter){
    return this.http.post(`${this.API_URI}/matters`, matter);
  }

  deleteMatter(id:string){
    return this.http.delete(`${this.API_URI}/matters/${id}`);
  }

  updateMatter(id: string, matter:Matter):Observable<Matter>{
    return this.http.put(`${this.API_URI}/matters/${id}`, matter)
  }
}
