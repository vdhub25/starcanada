import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  testimonialConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<a class='next slick-next'></a>",
    "prevArrow":"<a class='prev slick-prev'></a>",
    "dots":true,
    "infinite": true,
    "arrows" : false,
    "fade" : false,
    "speed" : 300,
    "autoplayspeed" : 200,
    "mobileFirst":true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              "slidesToShow": 2,
              "slidesToScroll" : 2
            }
          },
          {
            breakpoint: 1023,
            settings: {
              "arrows": true,
              "slidesToShow": 3,
              "slidesToScroll" : 3
            }

          }
        ]
  };
}
