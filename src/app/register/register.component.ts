import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onSubmit(form: any) {
    console.log(form.value);
  }

  myForm1!: FormGroup;

  firstname: FormControl | any;
  lastname: FormControl | any;
  email: FormControl | any;
  password: FormControl | any;
  confirm_password: FormControl | any;
  Radiobtn: FormControl | any;
  Dealership: FormControl | any;
  DealershipNum: FormControl | any;
  City: FormControl | any;
  State: FormControl | any;
  GSTNum: FormControl | any;
  constructor() { }
  
  ngOnInit(): void {

    this.firstname = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]);
    this.lastname = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(16),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')

    ])
    this.confirm_password = new FormControl('',[
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ])
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.Radiobtn = new FormControl('', [
      Validators.required
    ]);
    this.Dealership = new FormControl('', [
      Validators.required,
    ]);
    this.DealershipNum = new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{7}')
    ]);
    this.City = new FormControl('', [
      Validators.required
    ]);
    this.State = new FormControl('', [
      Validators.required
    ]);
 
   


    this.myForm1 = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password,
      confirm_password:this.confirm_password,
      email: this.email,
      Radiobtn:this.Radiobtn,
      Dealership:this.Dealership,
      DealershipNum:this.DealershipNum,
      City:this.City,  
      State:this.State,
      GSTNum:this.GSTNum

    });

  }
 
}
