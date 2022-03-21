import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.scss']
})
export class Home5Component implements OnInit {
@Input() data:any;
@Output() Details:EventEmitter<string>=new EventEmitter();
  constructor() { }
bankDeatails="SBI ACCOUNT";
sendDetails(){
  this.Details.emit(this.bankDeatails);
}
  ngOnInit(): void {
  }

}
