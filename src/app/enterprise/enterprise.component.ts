import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css'],
})
export class EnterpriseComponent {
  enterpriseimages: any[] = [];
  timeline: any[] = [
    {
      icon: 'fa-light fa-1 fa-xl',
      image:'/assets/images/icon-1.png'
    },
    {
      icon: 'fa-light fa-2 fa-xl',
      image:'/assets/images/icon-2.png'
    },
    {
      icon: 'fa-light fa-3 fa-xl',
      image:'/assets/images/icon-3.png'
    },
    {
      icon: 'fa-light fa-4 fa-xl',
      image:'/assets/images/icon-4.png'
    },
    {
      icon: 'fa-light fa-5 fa-xl',
      image:'/assets/images/icon-5.png'
    },
    {
      icon: 'fa-light fa-6 fa-xl',
      image:'/assets/images/icon-6.png'
    },
  ];

  constructor(private enterprise: ServiceService) {
    this.enterprise
      .getEnterpriseimages()
      .subscribe((res) => (this.enterpriseimages = res));
  }
}
