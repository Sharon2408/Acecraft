import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  onSubmit(form: any) {
    console.log(form.value);
  }
  myForm1!: FormGroup;
  username: FormControl | any;
  email: FormControl | any;
  password:FormControl|any;
  constructor() { }
  ngOnInit(): void {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    
  ])
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.myForm1 = new FormGroup({
      username: this.username,
      password:this.password,
      email:this.email,
    });
    
  }

}
