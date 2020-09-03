import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distancemoving',
  templateUrl: './distancemoving.component.html',
  styleUrls: ['./distancemoving.component.scss']
})
export class DistancemovingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
