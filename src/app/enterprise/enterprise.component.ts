import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent {

  @Input()
  ngStyle!: { [klass: string]: any; };
  ngDoCheck(){}

 
}
