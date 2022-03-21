import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FirstserviceService } from '../firstservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // name =new FormControl('');
// logIn=false;
// emValues="";
// passValues="";
//  data = new FormGroup({
//     email: new FormControl('',Validators.required),
//     password: new FormControl('',Validators.required),
//   })
  constructor(public changeB:FirstserviceService) { 
  
  }
  

  ngOnInit(): void {
  }
  // onLoad(){
  //   console.log(this.data.controls);
  //   this.logIn=true;
  //   // if(this.data.controls['email'].status !='INVALID' || this.data.controls['password'].status !='INVALID' ){
  //   //  this.emValues ="not valid email";
  //   //  this.passValues ="not valid password";


  //   }
  
  // logClick(){
  //   console.log(this.logIn);
  //   this.passService.saveData(this.logIn)
  // }
}
