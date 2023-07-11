import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  // Comments count
  val=0;
  // form submission
  onSubmit(form: any) {
    console.log(form.value);
    return this.val++
  }
  
  
  myForm1!: FormGroup;
  username: FormControl | any;
  email: FormControl | any;
  feedback: FormControl | any;
 
  constructor() { }
  
  ngOnInit(): void {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.feedback = new FormControl('',[
      Validators.required
    ]);
    this.myForm1 = new FormGroup({
      username: this.username,
       email: this.email,
      feedback: this.feedback
    });
  
  
  }
}
