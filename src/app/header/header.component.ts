import { Component, OnInit , HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  headerNavItems = [
    // { 
    //   navLink: "home",
    //   displayName : "Home"
    // },
    { 
      navLink: "about",      
      displayName : "About"
    },
    { 
      navLink: "services",      
      displayName : "Services"
    },
    {
      navLink: "whattoexpect",
      displayName: "What to Expect"
    },
    {
      navLink : "contact",
      displayName: "Contact Us"
    }     
  ];
  // closing the menu after link click
  public isMenuCollapsed = true;
  //code for scroll color chnage in all pages should add hostlistener in top imports 
  navbar_variable = false;
  @HostListener("document:scroll")
  scrollfunction() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.navbar_variable = true;
    }
    else {
      this.navbar_variable = false;
    }
  }
  

}
