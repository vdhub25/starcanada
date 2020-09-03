import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pianomoving',
  templateUrl: './pianomoving.component.html',
  styleUrls: ['./pianomoving.component.scss']
})
export class PianomovingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
