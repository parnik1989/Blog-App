import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO } from '../support/application.dtos';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public mainDataList: DataListDTO[] = [];

  constructor(private _httpService: HttpClient,
    private _router: Router) {
  }

  ngOnInit() {
    this.getDataList();
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
}
