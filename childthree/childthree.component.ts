
import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.scss']
})
export class ChildthreeComponent implements OnInit {
  // cliChildThree(){
  //   alert('child three');
  // }
  constructor(public firstService:FirstserviceService) { }
requireData=[];
  ngOnInit(): void {
  }
 
  getData(){
    this.requireData=this.firstService.first;
     console.log(this.requireData)
  }
  deleteEle(e:any){
    console.log(e);
    this.firstService.first.splice(e,1)
  }
  editEle(a:any){
    console.log(a);
     this.firstService.first.splice(a,1);
     this.firstService.first.push(a);
    this.firstService.first.push(a).sendData();
    console.log(a)
  }
}
