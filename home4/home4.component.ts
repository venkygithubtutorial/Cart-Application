import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {

  constructor(public fb: FormBuilder, public second: SecondService) { }
  regData = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z]+$")]],
    emailid: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    // dob: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(10)]],
    accountNumber: ['', [Validators.required, Validators.minLength(15)]]
    // cpassword: ['']
  });
  
  Address="";


  regIn = false;
  regCli() {
    // console.log(this.regData.controls);
    this.regIn = true;
    this.second.cngButton = false;
  }


  resbut() {
    this.regData.reset();
  }
  getData:any;
  rceDetails(data:any){
     console.log(data)
     this.getData=data;
  }

  //displaying a price &count every thing in ngoninit(){}
  price: any = 0;
  price1: any = 0;
  price2: any = 0;
  paymentDetails: any;
  products: any;
  ngOnInit(): void {
    this.paymentDetails = this.second.home3CartDetails;
    this.paymentDetails.forEach((data: any, i: any) => {
      console.log(this.paymentDetails)
      this.price = this.price + data.price;
      // this.price1= data.price;
      console.log(this.price, "gfdjkjshd")
    });
    // this.paymentDetails.forEach((data: any, i: any) => {
    //   console.log(this.paymentDetails)

    //   this.price1 = data.cngPrice;
    //   this.price2 = this.price1;
    //   console.log(this.price1, "4563457")
    // });
    console.log(this.paymentDetails['0'].price, "-------")
    this.products = this.second.cartcount;
  }

}
