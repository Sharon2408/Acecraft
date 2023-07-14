import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/Models/register';
import {  Subject } from 'rxjs';
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http:HttpClient) { }

  public authsubject = new Subject<boolean>;

  registerurl=environment.registerurl
  
// To post the user details
  get_User_Details(form:Register){
    return this.http.post<Register[]>(this.registerurl,form);
  }

  // To get all the details of registered users
  getCred(){
    return this.http.get(this.registerurl)
  }

//  To make isactive true
  isActive(item:Register,id:number){
    let reg = this.registerurl +'/'+ id
    item.isActive=true;
    return this.http.put(reg,item).subscribe(()=>{})
  }

  // To make isactive false
  isDeactive(item:Register,id:number){
    let reg = this.registerurl +'/'+ id
    item.isActive=false;
    return this.http.put(reg,item).subscribe(()=>{})
  }

  
}
