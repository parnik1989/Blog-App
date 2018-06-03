import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  public popularItems: object[] = [];

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getMostPopularBlogs();
  }
  public getMostPopularBlogs (): void {
    this._httpService.get('./assets/data/mostPopularList.json').subscribe(
      successResponse => {
        this.popularItems = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
