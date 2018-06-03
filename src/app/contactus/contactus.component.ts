import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string;
  message: string;
  email: string;
  constructor() { }

  ngOnInit() {
  }

  public sendMessage(): void {
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }


}
