import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO} from '../support/application.dtos';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getDataList();
  }
  public getDataList (): void {
    this._httpService.get<ResponseDTO>('./assets/data/travel.json').subscribe(
      successResponse => {
        this.mainDataList = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
