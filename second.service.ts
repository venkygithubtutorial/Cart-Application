import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SecondService {
 
  cartcount:any;
  home3CartDetails:any;
  cartButtonToggle:any;
  cngButton=true;
  constructor( public http : HttpClient) { }
   
  getData(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProduct(){
  

    return this.http.get('https://fakestoreapi.com/products')
  }
  cart(index:any){
    return this.http.get(`https://fakestoreapi.com/products/${index + 1}`)
    
  }
  
}
