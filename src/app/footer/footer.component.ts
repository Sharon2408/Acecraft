import { Component, OnInit } from '@angular/core';
import { Footer } from 'primeng/api';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
// footer items
  footer:any[]=[];
  icon:any=[];

  constructor(private foot: ServiceService,private icon1:ServiceService){}

  ngOnInit(): void {
    this.foot.getFooter().subscribe((res)=>this.footer=res)
this.icon1.getIcons().subscribe((res)=>this.icon=res)
  }



}
