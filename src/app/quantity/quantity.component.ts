import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {

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
