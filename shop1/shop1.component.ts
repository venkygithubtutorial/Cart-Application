import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop1',
  templateUrl: './shop1.component.html',
  styleUrls: ['./shop1.component.scss']
})
export class Shop1Component implements OnInit {
  persons: any;
  loader = false

  constructor(public HttpClient: HttpClient) { }
  // left side category
  category: any;
  catchCategory() {
    this.HttpClient.get('https://fakestoreapi.com/products/categories').subscribe((res) => {
      // this.loader = true
      // console.log(res)
      this.category = res;
      // this.loader = false
      this.category.unshift("all category")
    })
  }
  // right side products
  getProducts: any;
  catchProducts() {
    this.HttpClient.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.loader = true

      // console.log(res);
      this.getProducts = res;
      // this.loader = false

    })
  }
  // filtering a products
  filterProducts(hi: any) {
    // console.log(hi.target.value)
    this.HttpClient.get(`https://fakestoreapi.com/products/category/${hi.target.value}`).subscribe((response) => {
      // this.loader = true

      console.log(hi.target.value);
      this.getProducts = response;
      // this.loader = false

    })
  }
  //add to cart products
  incProduct: any = {};
  inc: any;
  getTotalProduct: any = [];
  cartButton: any;
  result: any;
  addToCart(index: any) {
    // alert("okkk");
    this.HttpClient.get(`https://fakestoreapi.com/products/${index + 1}`).subscribe((res) => {
      // console.log(res);
      this.incProduct = res;
      console.log(this.incProduct),
        console.log(this.incProduct.price)
      this.result = res;
      this.result.count = 1;
      this.result['changedPrice'] = this.result.price;
      this.getTotalProduct.push(this.result);
      // this.incProduct=this.getTotalProduct;
      // this.inc=this.getTotalProduct.price;
      // console.log(this.getTotalProduct)
      this.cartButton = this.getTotalProduct.length;
    })
    console.log(index);
  }

  //delete roduct from adding items
  delProduct(index: any) {
    let deleteProduct = confirm("u want to delete the product");
    if (deleteProduct == true) {
      this.getTotalProduct.splice(index, 1);
      this.cartButton = this.getTotalProduct.length;
    }
  }
  // another api
  getData: any;
  getApi() {
    this.HttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
      // console.log(res)
      this.getData = res;
    })
  }


  // increment functionality
  increment(index: any) {
    this.persons = this.getTotalProduct.find((x: { id: any; }) => x.id == index);
    console.log(this.persons)
    console.log(this.getTotalProduct);

    if (this.persons) {
      this.persons.count = this.persons.count + 1;
      console.log(this.persons.count);
      this.persons.price = (this.persons.changedPrice * this.persons.count);
      this.cartButton = this.persons.count.length;
    }

    //  this.incDec ++;
    //  this.inc=(this.incProduct.price*this.persons.count);
  }


  // decrement functionality
  decrement(index: any) {
    this.persons = this.getTotalProduct.find((x: { id: any; }) => x.id == index);

    if (this.persons) {
      if (this.persons.count > 0) {
        this.persons.count = this.persons.count - 1;
        console.log(this.persons.count);
        this.persons.price = (this.persons.changedPrice * this.persons.count);
      }
      if (this.persons.count == 0) {
        let deleteProduct = confirm("u want to delete the product");
        if (deleteProduct == true) {
          this.getTotalProduct.splice(index, 1);
          this.cartButton = this.persons.count;
        }
      }

    }
    // this.inc = (this.incProduct.price * this.incDec);
  }
  ngOnInit(): void {
    this.catchCategory();
    this.catchProducts();
    this.getApi()
  }
}
