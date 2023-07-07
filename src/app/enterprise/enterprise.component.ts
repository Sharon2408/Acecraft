import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css'],
})
export class EnterpriseComponent {

bottomimage1='/assets/images/enterprise-2.png'
bottomimage2='/assets/images/enterprise-3.png'

  enterpriseimages: any[] = [];
  timeline1:any[]=[];
  
  timeline: any[] = [
    {
      icon: 'fa-light fa-1 fa-xl',
      image:'/assets/images/icon-1.png',
      className:'img4',
      title1:'Single line',
      title2:'brief'
    },
    {
      icon: 'fa-light fa-2 fa-xl',
      image:'/assets/images/icon-2.png',
      className:'img5',
      title1:'Mind',
      title2:'mapping'
    },
    {
      icon: 'fa-light fa-3 fa-xl',
      image:'/assets/images/icon-3.png',
      className:'img6',
      title1:'Design and',
      title2:'details'
    },
    {
      icon: 'fa-light fa-4 fa-xl',
      image:'/assets/images/icon-4.png',
      className:'img7',
      title1:'Sampling'
    },
    {
      icon: 'fa-light fa-5 fa-xl',
      image:'/assets/images/icon-5.png',
      className:'img8',
      title1:'Manufacturing'
    },
    {
      icon: 'fa-light fa-6 fa-xl',
      image:'/assets/images/icon-6.png',
      className:'img9',
      title1:'Delivery'
    },
  ];

  constructor(private enterprise: ServiceService) {
    this.enterprise
      .getEnterpriseimages()
      .subscribe((res) => (this.enterpriseimages = res));
  }
}
