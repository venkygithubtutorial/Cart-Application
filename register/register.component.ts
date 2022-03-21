import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
regData=this.fb.group({
  username:['',[Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z]+$")]],
  emailid:['',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  dob:['',Validators.required],
  password:['',[Validators.required, Validators.minLength(10)]],
  cpassword:['',[Validators.required, Validators.minLength(10)]]
})
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {

  }


  regIn=false;
  regCli(){
    console.log(this.regData.controls);
    this.regIn=true;
  }

  // popbut(){
  //   alert('successfully register')
  // }


  resbut(){
    this.regData.reset();
  }



}
