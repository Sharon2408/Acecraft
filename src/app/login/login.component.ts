import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/Services/register.service';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent implements OnInit {
  constructor(
    private regservice: RegisterService,
    private router: Router,
    private alert: MessageService
  ) {}

  userdata: any;
  myForm1!: FormGroup;
  email: FormControl | any;
  password: FormControl | any;

  onSubmit(form: any) {
    //console.log(form.value.email);
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
}
