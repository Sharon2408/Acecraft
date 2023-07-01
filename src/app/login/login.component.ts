import { Component, OnInit } from '@angular/core';
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
  userdata: any;
  myForm1!: FormGroup;
  //username: FormControl | any;
  email: FormControl | any;
  password: FormControl | any;
 
  constructor(
    private regservice: RegisterService,
    private router: Router,
    private alert: MessageService
  ) {}

  onSubmit(form: any) {
    console.log(form.value.email);
    this.regservice.getCred().subscribe((res)=>{
this.userdata=res
      const user = this.userdata.find((a:any)=>{
        return a.email === this.myForm1.value.email && a.password === this.myForm1.value.password 
      })
      if(user){
        this.myForm1.reset();
        this.router.navigate(['','/'])
       
      
      }
      else{
        this.alert.add({
          severity: 'error',
          summary: 'error',
          detail: 'User Not Found',
        });
      }

    })
    // return this.regservice.login(form.value.email).subscribe((res) => {
    //   this.userdata = res;
    //   console.log(this.userdata);
      
    // });
  }
 

  ngOnInit(): void {
    // this.username = new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(16),
    // ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
      ),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.myForm1 = new FormGroup({
      // username: this.username,
      password: this.password,
      email: this.email,
    });
  }
}
