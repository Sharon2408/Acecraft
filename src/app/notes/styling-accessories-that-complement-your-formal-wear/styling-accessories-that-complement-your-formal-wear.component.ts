import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ServiceService } from 'src/Services/service.service';


@Component({
  selector: 'app-styling-accessories-that-complement-your-formal-wear',
  templateUrl: './styling-accessories-that-complement-your-formal-wear.component.html',
  styleUrls: ['./styling-accessories-that-complement-your-formal-wear.component.css']
})

export class StylingAccessoriesThatComplementYourFormalWearComponent implements OnInit {
 
  constructor(private route: ActivatedRoute, private serve: ServiceService) {}

  cards: any[] = [];
  id!: number | any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serve.getNotesById(this.id).subscribe((res) => this.cards = res)
  }
}





