import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nav: any[] = []
constructor(private navcontent:ServiceService){}

ngOnInit(): void {
  this.navcontent.getNavitems().subscribe((res)=>this.nav=res)
}
    sidebarVisible: boolean = false;
}



