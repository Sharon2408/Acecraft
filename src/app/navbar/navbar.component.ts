import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  val:string='9';
  nav: any[] = []
  foot:any[] = []
  footicon:any[] = []
constructor(private navcontent:ServiceService,private footcontent:ServiceService,private footicon1:ServiceService){}

ngOnInit(): void {
  this.navcontent.getNavitems().subscribe((res)=>this.nav=res)
  this.footcontent.getFooter().subscribe((res)=>this.foot=res)
  this.footicon1.getIcons().subscribe((res)=>this.footicon=res)
}
    sidebarVisible: boolean = false;
    sidebarVisible2: boolean = false;
}



