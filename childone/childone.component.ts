import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss']
})
export class ChildoneComponent implements OnInit {
  //template driven form *********
  loginForm1:any={};
  sub = false;
  
  clickVal(f:any) {
    this.sub = true;
    // if(f.form.status == 'INVALID'){
    //   return;
    // } 
    console.log(f.form.controls)  
     // console.log(hello);
    // hello.form.reset();
    // this.sub = false;
  }

  resetB() {
    this.loginForm1.reset();
  }

  //input output decorator *********
  // name=[];
  // @Input() data:any;
  // @Output() sendName:any =new EventEmitter();
  // products=[{
  //   name:"car",
  //   manu:"2019",
  //   rate:3000
  // },{
  //   name:"bike",
  //   manu:"2014",
  //   rate:1500,
  // },
  // {
  //   name:"auto",
  //   manu:"2010",
  //   rate:2000,
  // }]

  // value={employee:"venkatesh",role:"ui"};
  // res:any;
  // send(i:any){
  //   this.sendName.emit(i);
  //   console.log(i);
  // }
  constructor() { }

  ngOnInit(): void {
  }


}
