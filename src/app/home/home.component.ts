import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO} from '../support/application.dtos';
import {StorypageComponent} from './../storypage/storypage.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public popularItems: DataListDTO[] = [];
  public recentItems: DataListDTO[] = [];
  public authorsItem: DataListDTO[] = [];
  public storyDetails: any[] = [];
  public storyName: any = '';

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getMostPopularBlogs();
    this.getRecentBlogs();
    this.getAuthorsList();
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
  public getRecentBlogs (): void {
    this._httpService.get('./assets/data/recentList.json').subscribe(
      successResponse => {
        this.recentItems = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  public getAuthorsList (): void {
    this._httpService.get('./assets/data/authorsList.json').subscribe(
      successResponse => {
        this.authorsItem = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  public populateStoryDetails(storyName: string): void {
    console.log('Home page story populate' + storyName);
    this.storyName = storyName;
    this._httpService.get('./assets/BlogContents/' + storyName + '.json').subscribe(
      successResponse => {
        this.storyDetails = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    console.log(this.storypage.storyName);
    console.log(this.storypage.storyDetails);
  }

}
