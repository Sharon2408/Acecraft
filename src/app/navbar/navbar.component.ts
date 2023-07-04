import { Component, Injectable, OnInit, inject } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from 'src/Services/service.service';
import { CartService } from 'src/Services/cart.service';
import { MessageService } from 'primeng/api';
import { RegisterService } from 'src/Services/register.service';
import { authGuard } from '../auth.guard';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private regservice:RegisterService,  private router:Router, private navcontent:ServiceService,private footcontent:ServiceService,private footicon1:ServiceService,private cart1:CartService,private alert:MessageService){}
  val:number=0;
  nav: any[] = []
  foot:any[] = []
  footicon:any[] = []
  logged:boolean=false
//    routes:Routes=[
// {
//   canActivate:[authGuard]
  
// }
//   ]
 
  ngOnInit(): void {
    // console.log(this.routes.keys)
  this.navcontent.getNavitems().subscribe((res)=>this.nav=res)
  this.footcontent.getFooter().subscribe((res)=>this.foot=res)
  this.footicon1.getIcons().subscribe((res)=>this.footicon=res)
  this.cart1.getCartItems().subscribe((res) => {
    this.val = res.length;
    console.log(this.val);
  });
  this.cart1.countSubject.subscribe((res) => {
     this.val = res; 
    console.log(this.val)})
    this.regservice.authsubject.subscribe(
      (res)=>{
        this.logged=res;
        console.log(res)
      }
    )
  
    console.log(this.logged)
    
     
}



    sidebarVisible: boolean = false;
    sidebarVisible2: boolean = false;
    
    user = [
      {
        "id":"login",
        "icon":" ms-3 fas fa-sign-in"
      },
      {
        "id":"register",
        "icon":"ms-3 fas fa-user-plus"
      }
    ]

    onSelect(user:any){
      console.log(user)
      if(user.id=='login'){
        this.router.navigate(['login']);
      }
      if(user.id=='register'){
        this.router.navigate(['register']);
      }
    
   
}
userdata: any;
logout(){
  this.regservice.getCred().subscribe((res) => {
    this.userdata = res;
const confirmation=confirm("You will be Logged out!!")
     this.userdata.find((a: any) => {
      if (confirmation && a.isActive==true) {
        localStorage.removeItem('token')
        this.regservice.isDeactive(a, a.id);
        this.alert.add({
          key:'tc',
          severity:'error',
          summary:'Logged Out'
        })
        this.router.navigate([''])
        return true;
      }
      return false;
    });
})
}

}


