import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO, StoryDTO, StoryResponseDTO, StroyPageInput} from '../support/application.dtos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];

  constructor(private _httpService: HttpClient,
    private _router: Router) {
  }

  ngOnInit() {
    this.getDataList();
  }
  public getDataList (): void {
    this._httpService.get<ResponseDTO>('./assets/data/trending.json').subscribe(
      successResponse => {
        this.mainDataList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
