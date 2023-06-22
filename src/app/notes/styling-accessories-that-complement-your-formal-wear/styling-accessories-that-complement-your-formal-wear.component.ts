import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-styling-accessories-that-complement-your-formal-wear',
  templateUrl: './styling-accessories-that-complement-your-formal-wear.component.html',
  styleUrls: ['./styling-accessories-that-complement-your-formal-wear.component.css']
})
export class StylingAccessoriesThatComplementYourFormalWearComponent implements OnInit {
 
  constructor(private route:ActivatedRoute){}
  id!:string|null
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    
 }
}
