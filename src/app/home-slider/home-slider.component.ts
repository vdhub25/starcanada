import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  homeSlideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<a class='next slick-next'></a>",
    "prevArrow":"<a class='prev slick-prev'></a>",
    "dots":true,
    "infinite": true,
    "arrows" : false,
    "fade" : true,
    "speed" : 300,
    "autoplayspeed" : 200,
    "autoplay": true,
    "mobileFirst":true,
        responsive: [{
      breakpoint: 767,
      settings: {
        "arrows": true
      }

    }]
  };
}
