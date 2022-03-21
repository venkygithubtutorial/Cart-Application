import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
  constructor(private http:HttpClient) { }
  //delete method 
   clickDelete(id:any){
     const deleteHeader=new HttpHeaders({
       'authenticationtoken':'12334353456',
       'expirytoken':'24'
     })
     const deleteParams=new HttpParams().set('userrole','standarg')
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id,{headers:deleteHeader,params:deleteParams}) 
   }


   //put method
   clickPut(){
     const putBody={
       name:"venkatesh",
       id:1
     }
     const putHeader=new HttpHeaders({
       'userId':'mandapati',
       'hello':'23434'
     })
     const putParams=new HttpParams().set('setId','inputId')
    return this.http.put('https://jsonplaceholder.typicode.com/users/1',putBody,{headers:putHeader,params:putParams})
   }



  //get method
  clickd(){
    const header=new HttpHeaders({
      'content-type':'application/json',
      'authenticationtoken':'1233345'
    })
    const params1=new HttpParams().set('pageSize','10').set('pageOption','100')
   return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:header,params:params1})
  }

  
  //post method
  clickPost(body:any){
    const customerHeader=new HttpHeaders({
      'authentication':'testing12334',
      'helloWorld':'venky'
    });
    const customParams=new HttpParams().set('userRole','admin')
    return this.http.post('https://jsonplaceholder.typicode.com/users',body,{headers:customerHeader,params:customParams})
  }

 
   first:any;
   numbersCopy: any=[];
   saveData(d:any){
   this.first = d;
   console.log(this.first);
  // this.numbersCopy = [...this.first];
  }

}
