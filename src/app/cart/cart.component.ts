import { Component, OnInit } from '@angular/core';
// Route
import { Router } from '@angular/router';
// SweetAlert
import Swal from 'sweetalert2';
// Cart Service 
import { CartService } from 'src/Services/cart.service';
// Cart Model
import { cart } from 'src/Models/cart';
// Prime ng Toast 
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  constructor(
    private cartSvc: CartService,
    private router: Router,
    private alert: MessageService
  ) {}

  // To include the necessary details of the product in the cart
  carts: cart = {
    id: 0,
    title: '',
    img: '',
    size: 0,
    price: 0,
    quantity: 1,
    totalPrice: 1,
  };
// Initializing the values
  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;
  price: number = 0;


  // To show the total Price in the cart
  totalPrice(data: any) {
    const intialValue = 0;
    this.cartData = data;
    const a = this.cartData.reduce(
      (sum: any, item: any) => sum + item.price * item.quantity,
      intialValue
    );
    return a;
  }

  // To delete the the cart item in the Json

  delete(deleteItem: cart) {
    // Cart Service
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(() => console.log(deleteItem.title));
    
    // Prime NG toast
    this.alert.add({
      key: 'tc',
      severity: 'error',
      summary: 'Oops!',
      detail: 'An Item was Deleted',
    });
    this.ngOnInit();
  }

  // Array to store all the cart items
  cart: cart[] = [];
  // To keep the count of the cart
  cartcount = 0;
 
  ngOnInit(): void {
    // To get the items in the Cart Method invoked from cart Service 
    this.cartSvc.getCartItems().subscribe((response) => {
      this.cart = response;
      this.cartcount = response.length;
      console.log(this.cart);
    });
  }

  // Quantity increase product functionality
  increase_product(quantity: cart) {
    
    if (quantity.quantity == 1 || quantity.quantity < 10) 
    {
      quantity.quantity++;

      // Method to update the quantity in the json
      this.cartSvc.updateCart(quantity);

    } 
    else if (quantity.quantity == 10) 
    {
      Swal.fire('You can Order only 10 products');
    }
  }


  // Quantity decrease product functionality
  decrease_product(product: cart) {

    if (product.quantity < 100 && product.quantity > 1) 
    {
      product.quantity--;
       // Method to update the quantity in the json
      this.cartSvc.updateCart(product);
    }
  }
}
