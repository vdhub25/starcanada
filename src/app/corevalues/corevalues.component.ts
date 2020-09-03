import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corevalues',
  templateUrl: './corevalues.component.html',
  styleUrls: ['./corevalues.component.scss']
})
export class CorevaluesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  coreValueslideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<a class='next slick-next'></a>",
    "prevArrow":"<a class='prev slick-prev'></a>",
    "dots":true,
    "infinite": true,
    "arrows" : false,
    "fade" : false,
    "speed" : 1000,
    "autoplayspeed" : 1000,
    "mobileFirst":true,
    "autoplay": true,
        responsive: [{
      breakpoint: 768,
      settings: {
        "slidesToShow": 3, 
        "slidesToScroll": 3,
      }

    }]
  };
}
