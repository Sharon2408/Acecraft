import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

cards=[
  {
    name:'styling accessories that complement your formal wear',
    routerLink:'/note-card1'
  },
  {
    name:'5 classic looks for her'
  },
  {
    name:'acing your formal attire'
  },
  {
    name:' selecting & styling your workwear '
  },
  {
     name:'dressing to succeed'
  },
  {
    name:' lets’s talk ‘body types’, women! '
  },
  {
    name:'5 classic looks for him'
  },
  {
    name:'tips for a great outfit'
  },
  {
    name:'  workwear for all seasons: the women edit  '
  },
  {
    name:'  the acecraft difference  '
  },
  {
    name:'  corporate to cupcakes! – story of a superwoman. '
  },
  {
    name:'  how to complete your college look  '
  },
  {
    name:'  dress the right way to impress the right way  '
  },
  
]

}
