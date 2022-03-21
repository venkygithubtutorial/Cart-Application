
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';


import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(public HttpClient: HttpClient,private firsts:FirstserviceService ) { }

//  employees:any;
//  finalData:any;
//  act="ef0330075588e69e5322e5e4f3c8a84dbfe6eddb7dbc38a79c0253356040a337";


//  formData={"name":"sai","email":"shayakeerti_mishra@auer.net","username":"usai"}
 
 users:any;
  ngOnInit(): void {
    //delete method
    this.firsts.clickDelete(3).subscribe((res)=>{
      console.log(res)
    })
    
    
    //get method
  // this.firsts.clickd().subscribe((res)=>{
  //   this.users=res;
  
  //put method
     this.firsts.clickPut().subscribe((res)=>{
       console.log(res)
     })
  // })
  }
       //post method
  //   firstName:string='';
  //   lastName:String='';
  // helloFun(hello:NgForm){
  //     console.log(hello.value)

  //     const postBody={
  //       title:hello.value.firstName,
  //       body:hello.value.lastName,
  //     };
  //     console.log(postBody)
  //     this.firsts.clickPost(postBody).subscribe((res)=>{
  //       console.log(res);
  //     })
  // }
  // clickD(){
    
  //   this.HttpClient.get('https://gorest.co.in/public/v1/users')
  //   .subscribe((res)=>{
  //    this.employees=res;
  //     this.finalData = this.employees.data;
     
  //   });

  // }
  // getHeader(){
  //   return new HttpHeaders({
      
  //     'Authorization': 'Bearer' +this.act,
  //     'Content-Type':'application/json',
  //     'Accept':'application/json'
  // })}

  // createData(){
  //   this.HttpClient.post('https://gorest.co.in/public/v1/users',this.formData,{headers:this.getHeader()}).subscribe((a)=>{
  // console.log(a);
  // // this.clickD();
  // this.formData= this.employees;
  // console.log(this.employees)
  //   })
  // }

}
