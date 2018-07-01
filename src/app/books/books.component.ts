import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO, StoryDTO, StoryResponseDTO, StroyPageInput} from '../support/application.dtos';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];
  public storyPage: boolean;
  public storyPageInput: StroyPageInput;

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getDataList();
    this.storyPageInput = new StroyPageInput();
  }
  public getDataList (): void {
    this._httpService.get<ResponseDTO>('./assets/data/books.json').subscribe(
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
