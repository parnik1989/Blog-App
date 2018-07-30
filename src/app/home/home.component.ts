import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO} from '../support/application.dtos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public trendingList: DataListDTO[] = [];
  public recentList: DataListDTO[] = [];
  public authorsList: DataListDTO[] = [];
  public storyPage: boolean;
  constructor(private _httpService: HttpClient,
    private _router: Router) {
  }

  ngOnInit() {
    this.getMostPopularBlogs();
    this.getRecentBlogs();
    this.getAuthorsList();
  }
  public getMostPopularBlogs (): void {

    this._httpService.get<ResponseDTO>('./assets/data/trending.json').subscribe(
      successResponse => {
        this.trendingList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  public getRecentBlogs (): void {
    this._httpService.get<ResponseDTO>('./assets/data/recent.json').subscribe(
      successResponse => {
        this.recentList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  public getAuthorsList (): void {
    this._httpService.get<ResponseDTO>('./assets/data/authors.json').subscribe(
      successResponse => {
        this.authorsList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
