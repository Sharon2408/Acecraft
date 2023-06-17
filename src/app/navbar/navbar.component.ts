import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  nav: any[] =
    [
      {
        id: 1,
        navitem: 'school',
        routerLink: 'school'
      },

      {
        id:2,
        navitem:'college',
        routerLink: 'college'
      },

      {
        id:3,
        navitem:'enterprise',
        routerLink: 'enterprise'
      },

      {
        id:4,
        navitem:'notes',
        routerLink: 'notes'
      },
      {
        id:5,
        navitem:'airen mask',
        routerLink: 'airen'
      },
      {
        id:6,
        navitem:'',
        icon:'pi pi-cog',
        routerLink: 'settings'
      }
    ]

}



