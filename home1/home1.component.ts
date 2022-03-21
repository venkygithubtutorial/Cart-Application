import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecondService } from '../second.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  constructor(public route: Router, public http: HttpClient, public second: SecondService) { }
  //category list
  getCatg: any;
  getCatogory() {
    this.second.getData().subscribe((res) => {
      console.log(res)
      this.getCatg = res;

    })
  }

  //after api call display all products
  products: any;
  getProduct() {
    this.second.getProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    })
  }

 //after clicking add to cart button show products
  productDetails: any = [];
  cartSymbol: any;
  result: any;
  addToCart(product:any,index: any) {
    this.second.cart(index).subscribe((res) => {
      this.result = res;
      this.result.count = 1;
      this.result['cngPrice'] = this.result.price;
      // console.log(res)
      this.productDetails.push(this.result);
      console.log(this.productDetails);
      this.cartSymbol = this.productDetails.length;
      this.second.cartcount = this.cartSymbol;
      this.second.home3CartDetails = this.productDetails;
    })
  }

  //after clicking details button show proucts
  getDetails: any;
  detailsPart(id: any) {
    this.getDetails = id;
    console.log(this.getDetails);
    this.route.navigate(['/home/home1/home2', this.getDetails])
  }

  ngOnInit(): void {
    this.getCatogory();
    this.getProduct()
  }

}
