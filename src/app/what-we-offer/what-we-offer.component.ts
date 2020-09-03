import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  weOfferSlideConfig = {
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
        responsive: [
          {
            breakpoint: 767,
            settings: {
              "slidesToShow": 2, 
              "slidesToScroll": 2,
            }

          },
          {
            breakpoint: 1023,
            settings: {
              "slidesToShow": 3, 
              "slidesToScroll": 3,
            }

          }
  ]
  };
}
