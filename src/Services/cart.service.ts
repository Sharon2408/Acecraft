import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cart } from 'src/Models/cart';
import { Subject } from 'rxjs';
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  
  carturl = environment.carturl;

  // To post to cart object
  addToCart(product: cart) {
    this.http.post<cart>(this.carturl, product).subscribe((data) => {
    });
  }
// To get cart items
  getCartItems() {
    return this.http.get<cart[]>(this.carturl);
  }
// To delete item from cart
  removeItemFromCart(item: any) {
    return this.http.delete(this.carturl + '/' + item.id);
  }
// Subject to get cart count
  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe((res) => {
      // We use the subject to emit data
      this.countSubject.next(res.length);
    });
  }
// To update quantity in cart
  updateCart(product: cart) {
    let updateUrl = this.carturl + '/' + product.id
    this.http.put<cart[]>(updateUrl, product).subscribe(() => { })
  }
}
