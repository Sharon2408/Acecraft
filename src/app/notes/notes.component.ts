import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  cards:any[]=[]
  constructor (private CardContent : ServiceService){

  }
  ngOnInit(): void {
    this.CardContent.getCards().subscribe(
      (response)=>{
        this.cards=response
      }
    )
  }
}
