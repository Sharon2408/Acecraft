import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Models, Navitems, icons, enterpriseimages,Products, timeline } from 'src/Models/models';
import { Footer } from 'primeng/api';
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  // link from Environments 
  cardurl= environment.cardurl;
  navitems = environment.navitems;
  footer = environment.footer;
  icon = environment.icon;
  enterprise =environment.enterprise ;
  products = environment.products;
  timeline = environment.timeline

  // To get the cards (Notes Section)
  getCards() {
    return this.http.get<Models[]>(this.cardurl);
  }

  // Navbar items
  getNavitems() {
    return this.http.get<Navitems[]>(this.navitems);
  }

  // Footer items
  getFooter() {
    return this.http.get<Footer[]>(this.footer);
  }

  // Footer icons
  getIcons() {
    return this.http.get<icons[]>(this.icon);
  }

  // Enterprise sectionimages
  getEnterpriseimages(){
    return this.http.get<enterpriseimages[]>(this.enterprise)
  }

  // Timeline images at enterprise
  getTimeline(){
    return this.http.get<timeline[]>(this.timeline)
  }

  // To get the products
  getProducts(){
    return this.http.get<Products[]>(this.products)
  }

  // To get the product according to id passed
  getProductsById(id: number) {
    return this.http.get<Products[]>(this.products + '?id=' + id);
  }

  // To get the Notes content according to id passed
  getNotesById(id:number){
    return this.http.get<Models[]>(this.cardurl + '?id=' + id);
  }
}
