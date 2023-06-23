import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Models, Navitems, icons } from 'src/Models/models';
import { Footer } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  cardurl:string ='http://localhost:3000/cards'
  navitems:string='http://localhost:3000/navbar-items'
  footer:string=' http://localhost:3000/footer'
  icon:string='http://localhost:3000/footericons'
  getCards() {
    return this.http.get<Models[]>(this.cardurl);
  }

  getNavitems(){
    return this.http.get<Navitems[]>(this.navitems);
  }

  getFooter(){
    return this.http.get<Footer[]>(this.footer)
  }

  getIcons(){
    return this.http.get<icons[]>(this.icon)
  }
}
