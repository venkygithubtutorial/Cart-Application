import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';
import { SecondService } from '../second.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  finalCartCount:any;
  cngButton1=true;
  
  constructor(public serviceLog:FirstserviceService, public second:SecondService) { }

    // //toggle effect
    // cartBox= true;
    // showCart(){
    //   this.cartBox = (this.cartBox == true)? false : true;
    //   this.second.cartButtonToggle=this.cartBox 
    // }
  ngOnInit(): void {

  }
  ngDoCheck(){
    this.finalCartCount = this.second.cartcount;
    this.cngButton1 = this.second.cngButton;
  }

  // hello:any=[];
  // finalCli(){
  //   this.hello=this.serviceLog.first;
  //   console.log(this.hello)
  // }

//   rData(e:any){
//     this.hello.push(e)
//   }
//   ok(hello:any){
//  this.r1Data=hello;
//   }
// 

}
