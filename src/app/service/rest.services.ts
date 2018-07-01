import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {DataListDTO, ResponseDTO} from '../support/application.dtos';


@Injectable()
export class RestServices {
    public dataList: DataListDTO[] = [];
    private baseURL: string;

   constructor(private _httpService: HttpClient) {
       this.baseURL = './assets/data/';
   }

   public getBlogDataList (url: string): void {
    // this._httpService.get<ResponseDTO>(this.baseURL + url).toPromise().then(
    //     successResponse => {
    //         this.dataList = successResponse.dataList;
    //     },
    //     (err: HttpErrorResponse) => {
    //         if (err.error instanceof Error) {
    //           console.log('Client-side error occured.');
    //         } else {
    //           console.log('Server-side error occured.');
    //         }
    //       }
    // );

    // return this._httpService.get(this.baseURL + url).map((res:Response) => res.json());
   }
}
