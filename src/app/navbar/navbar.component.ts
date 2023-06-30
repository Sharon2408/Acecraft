import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from 'src/Services/service.service';
import { CartService } from 'src/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  val:number=0;
  nav: any[] = []
  foot:any[] = []
  footicon:any[] = []
constructor(private router:Router, private navcontent:ServiceService,private footcontent:ServiceService,private footicon1:ServiceService,private cart1:CartService){}

ngOnInit(): void {
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
}


