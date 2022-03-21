import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(public serviceLog:FirstserviceService) { }
// @Output() sendData:any=new EventEmitter();
  ngOnInit(): void {
  }
finalData:any;


  homePage(){
    // this.route.navigateByUrl("/wellcome");
    this.finalData=this.serviceLog.first;
    console.log(this.finalData);
    // this.sendData.emit(this.finalData);
   
  }
  
  
}
