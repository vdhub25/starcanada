import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  payment = false;
  //loading = false;
  constructor() {
   
   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  paymentBlock() {
    this.payment = true; 
    //this.loading = true;
    //window.scrollTo(0, 0)
  }

  ngOnDestroy(){
    //this.loading = false;
  }
 

}
