import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  

// code for adding class for specific component and scroll in one page add this in html of home  (scroll)="scrollfunction($event)" add hostlistener in imports
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 550) {
  //      let element = document.getElementById('navbar');
  //      element.classList.add('navbar_variable');
  //    } else {
  //     let element = document.getElementById('navbar');
  //       element.classList.remove('navbar_variable'); 
  //    }
  // }



}
