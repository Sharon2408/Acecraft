import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from 'src/Services/cart.service';
import { cart } from 'src/Models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
constructor(private cartSvc: CartService, private router:Router){}
  
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
quantity:number = 1;
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
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })

  Toast.fire({
    icon: 'error',
    title: 'Item deleted successfully'
  })
  this.ngOnInit();
}
onClick(){
  this.router.navigate(['/course'])
}

cart: cart[] = [];
ngOnInit(): void {
  this.cartSvc.getCartItems().subscribe(
    (response) => {
      this.cart = response;
      console.log(this.cart);
    }
  )
  }


 

  showMyProduct(productName: number) {
    if (productName == 1 || productName < 10){
      this.quantity++;
      this.cartSvc.updateCart(this.cartData)
     
      }
      else if(productName==10){
Swal.fire("You can Order only 10 products")
      }
    
}

decproduct(product: number){
  if(product < 100 && product > 1){
  this.quantity--
  }
 
}
}
