import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/Models/register';
import { authGuard } from 'src/app/auth.guard';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  

  constructor(private http:HttpClient) { }

  public authsubject = new Subject<boolean>;

  validateUser(data:boolean){
    this.authsubject.next(data)
  }
  registerurl='http://localhost:3000/register'



  get_User_Details(form:any){
    return this.http.post<Register[]>(this.registerurl,form);

  }

  getCred(){
    return this.http.get(this.registerurl)
  }

  // login(id:any){
  //   return this.http.get(this.registerurl,id)
  // }

  isActive(item:any,id:number){
    let reg = this.registerurl +'/'+ id
    item.isActive=true;
    return this.http.put(reg,item).subscribe(()=>{})
  }

  isDeactive(item:any,id:number){
    let reg = this.registerurl +'/'+ id
    item.isActive=false;
    return this.http.put(reg,item).subscribe(()=>{})
  }

  
}
