import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/Services/service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products:any[]=[]

  constructor(private prod:ServiceService){

  }
count=0
  ngOnInit(): void {

    this.prod.getProducts().subscribe((res)=>{this.products=res
      for (const x of this.products) {
        this.count++;
       
      }
      console.log(this.count)})
    
    
  }



  optionSelected: any;
  sortParam: any;
  sortDirection: any;

  onOptionsSelected(event: any) {
    console.log(event.target.value); //option value will be sent as event

    this.optionSelected = event.target.value;

    if (this.optionSelected === 'lth') {
      (this.sortParam = 'price'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'htl') {
      (this.sortParam = 'price'), (this.sortDirection = 'desc');
    } else if (this.optionSelected === 'nasc') {
      (this.sortParam = 'title'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'ndesc') {
      (this.sortParam = 'title'), (this.sortDirection = 'desc');
    }
  }
}
