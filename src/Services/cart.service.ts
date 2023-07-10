import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cart } from 'src/Models/cart';
import { Subject } from 'rxjs'; 
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carturl = environment.carturl;

  constructor(private http:HttpClient) { }

  addToCart(product: cart) {
    this.http.post<cart>(this.carturl, product).subscribe((data) => {
      console.log(data);
    });
  }

  getCartItems() {
    return this.http.get<cart[]>(this.carturl);
  }

  removeItemFromCart(item: any) {
    return this.http.delete(this.carturl + '/'+ item.id);
  }

  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe((res) => {
      // We use the subject to emit data
      this.countSubject.next(res.length);
      console.log(this.countSubject + 'inside sub');
     // const user=res.length
    });
  }

  updateCart(product:cart){
    let updateUrl=this.carturl+'/'+product.id
    this.http.put<cart[]>(updateUrl,product).subscribe(()=>{})
  }
}
