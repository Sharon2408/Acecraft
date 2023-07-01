import { Component, OnInit } from '@angular/core';
//ActivatedRoute, Router to read the parameter passed from single-product
import { ActivatedRoute, Router } from '@angular/router';
//Consume getProductsById(id)
import { ServiceService } from 'src/Services/service.service';
import { CartService } from 'src/Services/cart.service';
import { cart } from 'src/Models/cart';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-school-view-products',
  templateUrl: './school-view-products.component.html',
  styleUrls: ['./school-view-products.component.css']
})
export class SchoolViewProductsComponent implements OnInit{


  constructor(
    private productview: ServiceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private cart: CartService,
    private alert:MessageService
  ) {}


  productId!: number;



  products:any[] = [];

  cartitem:cart={
    id:0,
    title:'',
    img:'' ,
    size:0,
    price:0,
    totalPrice:0,
    quantity:1 
  }
  // quantity:number=1;
  size:number=28;

  addToCart(item:any){
    this.cartitem.title=item.title;
    this.cartitem.img=item.imgSrc;
    this.cartitem.price=item.price;
    this.cartitem.quantity=this.cartitem.quantity;
    this.cartitem.id=item.id;
    this.cartitem.size=this.size
    this.cart.addToCart(this.cartitem);
    console.log(item.id);
    this.alert.add({
      key: 'tc',
      severity: 'info',
      summary: 'Yaayy!!',
      detail: 'Product Added to your cart',
    });
    this.cart.getCount();
  }

  ngOnInit(): void {
    
     //this.productId = 1
     this.productId = this.actRoute.snapshot.params['id'];

     //Consume from ProductsService -> getProductsById(1)
     this.productview
       .getProductsById(this.productId).subscribe((res)=>this.products = res);
  }



  addProduct(item:any){
    console.log(item);

    // this.cart.addToCart(item);

  }

  value = 1

  showMyProduct(productName: number) {
    if (productName == 1 || productName < 10){
      this.value++
        
      }
      else if(productName==10){
Swal.fire("You can Order only 10 products")
      }
    
}

decproduct(product: number){
  if(product < 100 && product > 1){
  this.value--
  }
 
}
}
