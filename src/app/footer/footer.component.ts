import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  icons = [
    {
      icon:'assets/images/icons8-facebook-48.png',
      link:'https://www.facebook.com/'
    },
    {
      icon:'assets/images/icons8-instagram-48.png',
      link:'https://www.instagram.com/'
    },
    {
      icon:'assets/images/icons8-linkedin-48.png',
      link:'https://in.linkedin.com/'
    }
  ]
footer = [
  {
    name:'about'
  },
  {
    name:'care'
  },
  {
    name:'returns'
  },
  {
    name:'production'
  },
  {
    name:'terms'
  },
  {
    name:'get help'
  }
]
}
