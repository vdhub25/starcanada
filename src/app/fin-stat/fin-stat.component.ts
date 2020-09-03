import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-stat',
  templateUrl: './fin-stat.component.html',
  styleUrls: ['./fin-stat.component.scss']
})
export class FinStatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
