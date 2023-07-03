import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceService } from 'src/Services/service.service';


@Component({
  selector: 'app-styling-accessories-that-complement-your-formal-wear',
  templateUrl: './styling-accessories-that-complement-your-formal-wear.component.html',
  styleUrls: ['./styling-accessories-that-complement-your-formal-wear.component.css']
})
export class StylingAccessoriesThatComplementYourFormalWearComponent implements OnInit {
  cards:any[]=[];
   cardid!:number
  id!: string | null;
   constructor(private route:ActivatedRoute,private serve:ServiceService){}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.serve.getCards().subscribe((res)=>this.cards=res)
  
 }
}





