import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO, StoryResponseDTO, StoryDTO, StroyPageInput} from '../support/application.dtos';
import {RestServices} from '../service/rest.services';
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
  public storyPageInput: StroyPageInput;
  constructor(private _httpService: HttpClient,
    private _restServices: RestServices) {
  }

  ngOnInit() {
    this.storyPage = false;
    this.getMostPopularBlogs();
    this.getRecentBlogs();
    this.getAuthorsList();
    this.storyPageInput = new StroyPageInput();
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

  public populateStoryDetails(storyName: string, storyTitle: string): void {
    this._httpService.get<StoryResponseDTO>('./assets/BlogContents/' + storyName + '.json').subscribe(
      successResponse => {
        this.storyPageInput.storyDTO = successResponse['storyDetails'];
        this.storyPageInput.storyName = storyName;
        this.storyPageInput.storyTitle = storyTitle;
        this.storyPageInput.storyDesc = successResponse['storyDesc'];
        this.storyPage = true;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
