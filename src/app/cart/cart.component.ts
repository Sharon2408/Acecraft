import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
total=340;
@Input()
parentProductList: Array<string> = [];

@Input()
value: number | any;

@Output()
productEventEmitter = new EventEmitter();

@Output()
prodecreaseEventEmitter = new EventEmitter();

getquantity(quantity: number) {
  this.productEventEmitter.emit(quantity);
}


decquantity(quantity1: number) {
  this.prodecreaseEventEmitter.emit(quantity1)
}
}
