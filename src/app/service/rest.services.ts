import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataListDTO} from '../support/application.dtos';


@Injectable()
export class RestServices {
    public dataList: DataListDTO[] = [];
    private baseURL: string;

   constructor(private _httpService: HttpClient) {
       this.baseURL = './assets/data/';
   }

   public getBlogDataList (url: string): void {

   }
}
