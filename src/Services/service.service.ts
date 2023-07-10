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

  cardurl= environment.cardurl;
  navitems = environment.navitems;
  footer = environment.footer;
  icon = environment.icon;
  enterprise =environment.enterprise ;
  products = environment.products;
  timeline = environment.timeline

  getCards() {
    return this.http.get<Models[]>(this.cardurl);
  }

  getNavitems() {
    return this.http.get<Navitems[]>(this.navitems);
  }

  getFooter() {
    return this.http.get<Footer[]>(this.footer);
  }

  getIcons() {
    return this.http.get<icons[]>(this.icon);
  }

  getEnterpriseimages(){
    return this.http.get<enterpriseimages[]>(this.enterprise)
  }

  getTimeline(){
    return this.http.get<timeline[]>(this.timeline)
  }

  getProducts(){
    return this.http.get<Products[]>(this.products)
  }

  getProductsById(id: number) {
    return this.http.get<Products[]>(this.products + '?id=' + id);
  }

  getNotesById(id:number){
    return this.http.get<Models[]>(this.cardurl + '?id=' + id);
  }
}
