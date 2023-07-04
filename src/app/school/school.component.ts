import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {

  constructor(private title:Title){
    this.title.setTitle('School');
  }


school=[ 
  {
    img:'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/jain.jpeg',
    text1:'jgi',
    routerLink:'/products'
  },
  {
    img:'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/rvschool.png',
    text1:'rv'
  },
  {
    img:'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/sophias.jpg',
    text1:'sophia'
  },
  {
    img:'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/kumarans.png',
    text1:'kumarans'
  },
  {
    img:'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Logo-%20New%20Horizon%20Gurukul.jpg',
    text1:'new horizon gurukul'
  },
  {
    img:'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/cgis.png',
    text1:'cisb'
  },
  {
    img:'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/NHIS%20LOGO%20Jpeg.jpg',
    text1:'nhis'
  }
]
visible: boolean = false;
position: string = 'top';

showDialog(position: string) {
    this.position = position;
    this.visible = true;
}
}
