import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit {

  constructor(public second: SecondService) { }

  
 //receive array of object data from service
  fetchProduct() {
    this.home3Data = this.second.home3CartDetails;
    console.log("data conformation", this.home3Data)
  }


  //delete a product when you click
  home3Data: any;
  delItem(del: any) {
    this.home3Data.splice(del, 1);
    this.second.cartcount = this.home3Data.length;
    let home3CartDetails = this.second.home3CartDetails;
    let counter = 0;
    if (home3CartDetails) {
      home3CartDetails.forEach((element: any) => {
        counter = counter + element.count;
        console.log(element);
      });
      console.log(counter + '+++++++++++++++++++++++')
      console.log(home3CartDetails + '-------')
    }
    this.second.cartcount = counter;
  }


  //increment a product details
  incFun: any;
  finalData: any;
  incProduct(index: any) {
    this.finalData = this.home3Data.find((x: { id: any; }) => x.id == index);
    // console.log( this.finalData.id)
    if (this.finalData) {
      this.finalData.count = this.finalData.count + 1;
      this.finalData.price = (this.finalData.cngPrice * this.finalData.count);
      // console.log(this.finalData.count);
      this.second.cartcount = this.second.cartcount + 1;
      // this.second.cartcount=this.finalData.count;
      // this.second.incFun=this.second.cartcount+1;
      console.log(this.finalData.count);

    }
  }


  //decrement a product details
  decProduct(index: any,id:any) {
    this.finalData = this.home3Data.find((x: { id: any; }) => x.id == index);
    if (this.finalData.count > 0) {
      this.finalData.count = this.finalData.count - 1;
      this.finalData.price = (this.finalData.cngPrice * this.finalData.count);
      // console.log(this.finalData.length);
      this.second.cartcount = this.second.cartcount - 1;
    }
    if (this.finalData.count == 0) {
      let deleteProduct = confirm("u want to delete the product");
      if (deleteProduct == true) {
        this.home3Data.splice(index=id, 1);
        // this.second.cartcount = this.finalData.count;
      }
    let home3CartDetails = this.second.home3CartDetails;
    let counter1 = 0;
    if (home3CartDetails) {
      home3CartDetails.forEach((element: any) => {
        counter1 = counter1 + element.count;
        console.log(element);
      });
      console.log(counter1 + '+++++++++++++++++++++++')
      console.log(home3CartDetails + '-------')
      
      }
      this.second.cartcount=counter1;
    }
    
  }
  
buttonToggle:any
  ngOnInit(): void {
    this.fetchProduct();
    // this.buttonToggle=this.second.cartButtonToggle;
  }

}
