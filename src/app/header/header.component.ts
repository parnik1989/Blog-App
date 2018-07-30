import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataListDTO, ResponseDTO, StoryResponseDTO, StroyPageInput } from '../support/application.dtos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open: boolean;
  searchInput: string;
  searchData: DataListDTO[];
  updatedBlogList: DataListDTO[];
  constructor(private _httpService: HttpClient,
    private _router: Router) {
  }

  ngOnInit() {
    this.getSearchData();
  }

  public openSideNav(): void {
    if (this.open) {
      document.getElementById('mySidenav').style.width = '0px';
    } else {
      document.getElementById('mySidenav').style.width = '250px';
    }
    this.open = !this.open;
  }
  public search(): void {
    this.updatedBlogList = new Array<DataListDTO>();
    if (this.searchInput.length > 3) {
      this.searchData.forEach(element => {
        if (element.title.toLocaleLowerCase().search(this.searchInput.toLocaleLowerCase()) !== -1) {
          this.updatedBlogList.push(element);
        }
      });
    }
  }

  public onSelect(event): void {
    this.updatedBlogList = new Array<DataListDTO>();
    this.searchInput = '';
    this._router.navigateByUrl('/' + event.target.value);
  }

  private getSearchData(): void {
    this._httpService.get<ResponseDTO>('./assets/data/masterList.json').subscribe(
      successResponse => {
        this.searchData = successResponse.dataList;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
