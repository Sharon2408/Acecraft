import { Component, OnInit } from '@angular/core';
//ActivatedRoute, Router to read the parameter passed from single-product
import { ActivatedRoute, Router } from '@angular/router';
//Consume getProductsById(id)
import { ServiceService } from 'src/Services/service.service';


@Component({
  selector: 'app-school-view-products',
  templateUrl: './school-view-products.component.html',
  styleUrls: ['./school-view-products.component.css']
})
export class SchoolViewProductsComponent implements OnInit{

  productId!: number;

  constructor(
    private productview: ServiceService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  products:any[] = [];

  ngOnInit(): void {
    
     //this.productId = 1
     this.productId = this.actRoute.snapshot.params['id'];

     //Consume from ProductsService -> getProductsById(1)
     this.productview
       .getProductsById(this.productId).subscribe((res)=>this.products = res);
  }
}
