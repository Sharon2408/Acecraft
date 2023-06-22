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
    routerLink:['/note-card1',1]
  },
  {
    name:'5 classic looks for her',
    routerLink:'/note-card1'
  },
  {
    name:'acing your formal attire',
    routerLink:'/note-card1'
  },
  {
    name:' selecting & styling your workwear ',
    routerLink:'/note-card1'
  },
  {
     name:'dressing to succeed',
     routerLink:'/note-card1'
  },
  {
    name:' lets’s talk ‘body types’, women! ',
    routerLink:'/note-card1'
  },
  {
    name:'5 classic looks for him',
    routerLink:'/note-card1'
  },
  {
    name:'tips for a great outfit',
    routerLink:'/note-card1'
  },
  {
    name:'  workwear for all seasons: the women edit  ',
    routerLink:'/note-card1'
  },
  {
    name:'  the acecraft difference  ',
    routerLink:'/note-card1'
  },
  {
    name:'  corporate to cupcakes! – story of a superwoman. ',
    routerLink:'/note-card1'
  },
  {
    name:'  how to complete your college look  ',
    routerLink:'/note-card1'
  },
  {
    name:'  dress the right way to impress the right way  ',
    routerLink:'/note-card1'
  },
  
]

}
