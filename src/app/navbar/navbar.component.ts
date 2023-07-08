import { Component, Injectable, OnInit, inject } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from 'src/Services/service.service';
import { CartService } from 'src/Services/cart.service';
import { MessageService } from 'primeng/api';
import { RegisterService } from 'src/Services/register.service';
import { authGuard } from '../../Gaurds/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { state } from '@angular/animations';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private regservice:RegisterService,  private router:Router, private navcontent:ServiceService,private footcontent:ServiceService,private footicon1:ServiceService,private cart1:CartService,private alert:MessageService){
   
  }
  val:number=0;
  nav: any[] = []
  foot:any[] = []
  footicon:any[] = []
  logged:any
  
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
    //console.log(this.logged)
    
     
}



    sidebarVisible: boolean = false;
    sidebarVisible2: boolean = false;
    
  
userdata: any;
showSticky() {
 
}
onConfirm(){}
onReject(){}

logout(){
  this.regservice.getCred().subscribe((res) => {
    this.userdata = res;
    this.logged=false;
    this.regservice.authsubject.next(false);
    const confirmation=confirm("You will be Logged out!!")
     this.userdata.find((a: any) => {
      if (confirmation && a.isActive==true) {
        localStorage.removeItem('token')
        window.location.reload();
        this.logged=true
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


