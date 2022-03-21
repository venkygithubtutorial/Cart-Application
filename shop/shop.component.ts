import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public HttpClient:HttpClient) { }

  // for getting Categories 
   categoryName:any;
   getCategory(){
    this.HttpClient.get('https://fakestoreapi.com/products/categories')
    .subscribe((res=>{
    this.categoryName=res;
    console.log(res);
    // this.categoryName.unshift("Category list");
    }))
  }

  // Getting all the products
  allProducts:any;
  getProducts(){
    this.HttpClient.get("https://fakestoreapi.com/products")
    .subscribe((res)=>{
      this.allProducts=res;
      console.log(this.allProducts);

    })
  }


  // filter the products 
  filterProducts(e:any){
    this.HttpClient.get(`https://fakestoreapi.com/products/category/${e.target.value}`)
    .subscribe((res)=>{
      console.log(e.target.value);
      // console.log(res);
      this.allProducts= res;
      // console.log(this.allProducts);
    })

  }

  // Add item to cart
  selectedProduct:any={};
  TotalProduct:any=[];
  cartCount:any;
  addToCart(index:any){
    this.HttpClient.get(`https://fakestoreapi.com/products/${index + 1}`)
    .subscribe((res)=>{
      this.selectedProduct=res;
      this.TotalProduct.push(this.selectedProduct);
      alert("Item addedsuccessfully")
      // console.log(this.TotalProduct);
      this.cartCount= this.TotalProduct.length
    })
    // console.log(index);
  }

  // Show the cart 
  cartBox= false;
  showCart(){
    this.cartBox = (this.cartBox == true)? false : true; 
  }

  // remove the product from cart 
  deleproduct(index:any){
    // console.log(e)
    let finalTimeAsk= confirm("Are you sure to delet the product from cart?");
    if(finalTimeAsk == true){
      this.TotalProduct.splice(index,1);
      this.cartCount = this.TotalProduct.length;
    }

    

  }



  ngOnInit(): void {
    this.getCategory();
    this.getProducts();
  }

}
