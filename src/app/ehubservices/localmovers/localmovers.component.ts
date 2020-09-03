import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localmovers',
  templateUrl: './localmovers.component.html',
  styleUrls: ['./localmovers.component.scss']
})
export class LocalmoversComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
