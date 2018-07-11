import { Component, OnInit } from '@angular/core';
import {DataListDTO, ResponseDTO, StoryDTO, StoryResponseDTO, StroyPageInput} from '../support/application.dtos';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];
  public storyPageInput: StroyPageInput;
  public storyPage: boolean;

  constructor(private _httpService: HttpClient,
    private _router: Router) {
  }

  ngOnInit() {
    this.getDataList();
    this.storyPageInput = new StroyPageInput();
  }
  public getDataList (): void {
    this._httpService.get<ResponseDTO>('./assets/data/recent.json').subscribe(
      successResponse => {
        this.mainDataList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  public populateStoryDetails(storyName: string, storyTitle: string): void {
    if (storyName === 'book_sub') {
      this._router.navigateByUrl('/book_sub');
      console.log(storyName);
    } else {
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
}
