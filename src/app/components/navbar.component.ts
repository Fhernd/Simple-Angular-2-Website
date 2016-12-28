import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private projectName:string;

  constructor() {
    this.projectName = "A2Website"
   }

  ngOnInit() {
  }

}
