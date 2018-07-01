import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO, StoryDTO, StoryResponseDTO, StroyPageInput} from '../support/application.dtos';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];
  public storyPageInput: StroyPageInput;
  public storyPage: boolean;

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getDataList();
    this.storyPageInput = new StroyPageInput();
  }

  public getDataList (): void {
    this._httpService.get<ResponseDTO>('./assets/data/authors.json').subscribe(
      successResponse => {
        this.mainDataList = successResponse.dataList;
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
