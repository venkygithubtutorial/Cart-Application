import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FirstserviceService} from '../firstservice.service';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.scss']
})
export class ChildtwoComponent implements OnInit {
 @Input()hi:any;
// @Input()ha:any;
  constructor(public firstService:FirstserviceService) { }
firstName:any;

  ngOnInit(): void {
  }
  // ngOnChanges(changes: SimpleChanges){
  //     console.log(changes)
  // }
  // ngDoCheck(): void { 
  //     console.log(this.)
  // }

  sendData(){
  this.firstService.saveData(this.firstName);
  this.firstName="";
  }

  
}
