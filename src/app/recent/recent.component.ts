import { Component, OnInit } from '@angular/core';
import {DataListDTO} from '../support/application.dtos';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  public dataList: DataListDTO[] = [];

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getMostPopularBlogs();
  }
  public getMostPopularBlogs (): void {
    this._httpService.get('./assets/data/mostPopularList.json').subscribe(
      successResponse => {
        this.dataList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
