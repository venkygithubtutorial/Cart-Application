import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-childfour',
  templateUrl: './childfour.component.html',
  styleUrls: ['./childfour.component.scss']
})
export class ChildfourComponent implements OnInit {

  constructor(public first: FirstserviceService) {}
  Address="";
  employeDetails=[{name:'venky',salary:'50000',company:'ibase',location:'hyderabad'},
  {name:'sai',salary:'20000',company:'bluechip',location:'bangloore'},
  {name:'narendra',salary:'40000',company:'vincloud',location:'hyderabad'},
  {name:'hari',salary:'20000',company:'tcs',location:'chennai'}]

  
  // task api data send to service and receive data service to childfour components
  // recAPI: any;
  // getAPI() {
  //   this.recAPI = this.first.first;
  //   console.log(this.recAPI);
  // }


  ngOnInit(): void {
  }

}
