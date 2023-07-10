import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-prods',
  templateUrl: './school-prods.component.html',
  styleUrls: ['./school-prods.component.css']
})
export class SchoolProdsComponent implements OnInit {

// Input from products
@Input() products:any;

constructor(
  private router: Router
) {}
ngOnInit():void {}

productId!: number;

// When clicked Id will get passed in the below function

viewProduct(id: number) {
  this.productId = id;
  this.router.navigate(['school-prod-view/' + id]);
}

}
