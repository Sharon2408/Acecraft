import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  cards:any[]=[]
  constructor (private CardContent : ServiceService, private router:Router){

  }
  ngOnInit(): void {
    this.CardContent.getCards().subscribe(
      (response)=>{
        this.cards=response
      }
    )
  }


// When clicked Id will get passed in the bekow function

viewProduct(id: number) {

  this.router.navigate(['notessub1/' + id]);
}
}
