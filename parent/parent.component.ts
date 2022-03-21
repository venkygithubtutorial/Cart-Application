import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  
  public required=true;
  public group={
     "textStyle":this.required,
     "textColor":this.required,
     "textSize":this.required
  }
 
 
  // contactForm:any;
 
  // loginForm = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  // })

  // loginUser() {
  //   console.warn(this.loginForm.value)
  // }

  // get user() {
  //   return this.loginForm.get('email');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }
  // ValidateForm(){
  //   if (this.loginForm.invalid){
  //     this.loginForm.get('email')?.markAsTouched();
  //     this.loginForm.get('password')?.markAsTouched();
  //     return;
  //   }

  // }

  constructor() { }
  // onSubmit() {
  //   console.log(this.contactForm.value);
  // }
  ngOnInit(): void {

  }

}
