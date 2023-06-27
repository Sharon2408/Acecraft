import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Models, Navitems, icons, enterpriseimages,Products } from 'src/Models/models';
import { Footer } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  cardurl: string = 'http://localhost:3000/cards';
  navitems: string = 'http://localhost:3000/navbar-items';
  footer: string = ' http://localhost:3000/footer';
  icon: string = 'http://localhost:3000/footericons';
  enterprise: string = 'http://localhost:3000/enterpriseimages';
  products: string = 'http://localhost:3000/Products';

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

  getProducts(){
    return this.http.get<Products[]>(this.products)
  }

  getProductsById(id: number) {
    return this.http.get<Products[]>(this.products + '?id=' + id);
  }
}
