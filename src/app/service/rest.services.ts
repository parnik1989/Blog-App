import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class RestServices {
   constructor(private httpService: HttpClient) { }

   public showCurrentDate (): void {
       console.log(new Date());
   }

   public getBlogDataList (): any {
    this.httpService.get('./assets/data/mostPopularList.json').subscribe(
        data => {
            console.log(data);
            console.log(new Date());
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
   }
}
