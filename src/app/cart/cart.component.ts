import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from 'src/Services/cart.service';
import { cart } from 'src/Models/cart';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
constructor(private cartSvc: CartService, private router:Router,private alert:MessageService){}
  
carts:cart={
  id:0,
  title:'',
  img:'',
  size:0,
  price:0,
  quantity:1,
  totalPrice:1    
}

cartData: any = [];
totalprice: number = 0;
quantity = 1;
price:number=0;


totalPrice(data: any) {
  debugger
  const intialValue = 0;
  this.cartData = data
  const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
  return a;
}


delete(deleteItem: cart) {
  this.cartSvc.removeItemFromCart(deleteItem).subscribe(
    () => console.log(deleteItem.title)      
  )
  this.alert.add({
    key: 'tc',
    severity: 'error',
    summary: 'Oops!',
    detail: 'An Item was Deleted',
  });
  this.ngOnInit();
}



cart: cart[] = [];
cartcount=0
ngOnInit(): void {
  this.cartSvc.getCartItems().subscribe(
    (response) => {
      this.cart = response;
      this.cartcount=response.length;
      console.log(this.cart);
    }
  )
  





  }


 

  showMyProduct(quantity: cart) {
    if (quantity.quantity == 1 || quantity.quantity < 10){
      quantity.quantity++;
      this.cartSvc.updateCart(quantity)
     
      }
      else if(quantity.quantity==10){
Swal.fire("You can Order only 10 products")
      }
    
}

decproduct(product: cart){
  if(product.quantity < 100 && product.quantity > 1){
  product.quantity--
  this.cartSvc.updateCart(product)
  }
 
}
}
