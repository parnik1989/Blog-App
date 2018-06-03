import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show: any = false;
  name: any = 'Parnik';

  public openLink() {
    console.log('opened Data');
  }


}
