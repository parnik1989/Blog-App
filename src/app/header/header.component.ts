import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open: boolean;
  constructor() { }

  ngOnInit() {
  }

  public openSideNav(): void {
    if (this.open) {
      document.getElementById('mySidenav').style.width = '0px';
    } else {
      document.getElementById('mySidenav').style.width = '250px';
    }
    this.open = !this.open;
  }
}
