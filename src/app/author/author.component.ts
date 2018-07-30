import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO } from '../support/application.dtos';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];

  constructor(private _httpService: HttpClient) {
  }

  ngOnInit() {
    this.getDataList();
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
}
