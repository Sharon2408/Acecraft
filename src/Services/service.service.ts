import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Models, Navitems, icons, enterpriseimages,Products, timeline } from 'src/Models/models';
import { Footer } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  cardurl: string = 'https://acecraft-db.onrender.com/cards';
  navitems: string = 'https://acecraft-db.onrender.com/navbar-items';
  footer: string = ' https://acecraft-db.onrender.com/footer';
  icon: string = 'https://acecraft-db.onrender.com/footericons';
  enterprise: string = 'https://acecraft-db.onrender.com/enterpriseimages';
  products: string = 'https://acecraft-db.onrender.com/Products';
  timeline:string = 'https://acecraft-db.onrender.com/timeline'

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
