import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private CardContent: ServiceService, private router: Router) { }

  // To store the cards from the json
  cards: any[] = []

  // When clicked Id will get passed in the below function
  viewNote(id: number) {
    this.router.navigate(['notessub1/' + id]);
  }

  ngOnInit(): void {
    this.CardContent.getCards().subscribe(
      (response) => {
        this.cards = response
      }
    )
  }

}
