import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FirstserviceService } from './firstservice.service';
import { SecondService } from './second.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDemo';
  finalCartCount:any;
  // sendAPI:any;
  constructor(public httpAPI:HttpClient, public second:SecondService) { }
 
  openDialog(){
   
  }
  
  // sendFun(){
  //   this.httpAPI.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
  //     // console.log(res)
  //     this.sendAPI=res;
  //     // console.log(this.sendAPI);
  //     this.firstser.saveData(this.sendAPI);
  //     // console.log(this.firstser);
      
  //   })
  
  // }
  // btn:any=[];
  // getting(d:any){
  // this.btn.push(d);
  // }
  // finalCall(){
  //   this.btn=this.serviceLog.first;
  //   // alert('ok');
  // }
ngOnInit(){
  
//  this.sendFun()
// this.finalCartCount = this.second.cartcount;
}
ngDoCheck(){
  this.finalCartCount = this.second.cartcount;
}
  
}

