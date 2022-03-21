import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
//after clicking details button to display single product
finalDetails:any;
  constructor(public second:SecondService,public route:ActivatedRoute,public http:HttpClient) { }

 async ngOnInit(){
    this.route.params.pipe(switchMap((params:Params)=>
  this.http.get(`https://fakestoreapi.com/products/${+params['id']}`))).subscribe((res:any)=>{
    // console.log(res)
    this.finalDetails=res;
  })
  }


  ngDoCheck(){

  }

}
