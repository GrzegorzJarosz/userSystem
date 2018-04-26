import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navOpen = true;
  constructor() { }

  ngOnInit() {
  }

  navToggler(){
    this.navOpen = !this.navOpen;
  }

}
