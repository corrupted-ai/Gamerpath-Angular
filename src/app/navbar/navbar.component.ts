import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedin:string
  constructor() { }

  ngOnInit() {
    this.loggedin = localStorage.getItem("loggedin")
    console.log(this.loggedin)
  }

}
