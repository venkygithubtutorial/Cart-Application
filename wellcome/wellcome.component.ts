import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {
  clientList = [{ clientId: 10, name: "sai", area: "hyd" },
                { clientId: 13, name: "sai", area: "hyd" },
                { clientId: 16, name: "sai", area: "hyd" },
                { clientId: 19, name: "sai", area: "hyd" }]
                color=0;
  constructor(public activatedRoute: ActivatedRoute) {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    // })
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    })

  }

  ngOnInit(): void {
  }

}
