import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/Models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  registerurl='http://localhost:3000/register'



  get_User_Details(form:any){
    return this.http.post<Register[]>(this.registerurl,form);

  }




  getCred(){
    return this.http.get(this.registerurl)
  }

  login(id:any){
    return this.http.get(this.registerurl,id)
  }

  isActive(id:Register){
    let reg = this.registerurl +'/'+ id.id
    return this.http.put<Register[]>(reg,id).subscribe(()=>{})
  }
}
