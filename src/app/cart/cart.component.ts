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
  constructor( private cartSvc: CartService, private alert: MessageService) {}
 
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
  totalPrice(data: any) 
  {
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
 
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: 'error',
              title: 'Error in generating Stripe Payment Gateway',
            });
          },
        });
      };
      window.document.body.appendChild(script);
    }
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


  paymentHandler: any = null;
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NPhAIDBuqf3gYxJaVuM2k513NFWYSUuvSK29hPVgHKx92rd2dBhz5xEc5qABUMoi12szZZ7Ik3nI7gU21hXkffC00vHQmnBMf',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        //alert('Stripe token generated!');
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'success',
          title: 'Order Placed Successfully',
        });
      },
    });
    paymentHandler.open({
      name: 'Course',
      description: 'Order Details',
      amount: amount,
    });
  }

  ngOnInit(): void {
    // To get the items in the Cart Method invoked from cart Service 
    this.cartSvc.getCartItems().subscribe((response) => {
      this.cart = response;
      this.cartcount = response.length;
      console.log(this.cart);
    });
    this.invokeStripe();
  }
}
