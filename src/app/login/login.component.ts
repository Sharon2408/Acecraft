import { Component, OnInit,EventEmitter,ViewChild,AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/Services/register.service';
import { MessageService } from 'primeng/api';
import { NavbarComponent } from '../navbar/navbar.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit,AfterViewInit {
  
  @ViewChild(NavbarComponent) navbar: any;
  

  constructor(
    private regservice: RegisterService,
    private router: Router,
    private alert: MessageService
  ) {}

  userdata: any;

  myForm1!: FormGroup;
  email: FormControl | any;
  password: FormControl | any;
  
status:boolean=false;

// Form Submission
  onSubmit(form: any) {
    this.regservice.getCred().subscribe((res) => {
      this.userdata = res;
      const user = this.userdata.find((a: any) => {
        if (
          a.email === this.myForm1.value.email &&
          a.password === this.myForm1.value.password
        ) {
          this.regservice.isActive(a, a.id,);
          return true;
        }
        return false;
      });
// To Genrate token if user is found
      if (user) {
        console.log(this.userdata.id);
        this.myForm1.reset();
        this.regservice.authsubject.next(true);
        localStorage.setItem('token', Math.random().toString())
        this.router.navigate(['']);
        this.alert.add({
          key: 'tc',
          severity: 'success',
          summary: 'success',
          detail: 'Login Successful',
        });
        this.status=true;
      } else {
        this.alert.add({
          key: 'tc',
          severity: 'error',
          summary: 'User Not Found',
          detail: 'Invalid Credentials',
        });
        this.myForm1.reset();
      }
    });
  }

  ngOnInit(): void {
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    
    this.myForm1 = new FormGroup({
      password: this.password,
      email: this.email,
    });
    
  }


ngAfterViewInit(): void {
  this.status=this.navbar.status;
}

}
