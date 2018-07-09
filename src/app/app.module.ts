import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { StorypageComponent } from './storypage/storypage.component';
import { AppRoutingModule } from './/app-routing.module';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodComponent } from './food/food.component';
import { TravelComponent } from './travel/travel.component';
import { BooksComponent } from './books/books.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PopularComponent } from './popular/popular.component';
import { RecentComponent } from './recent/recent.component';
import { AuthorComponent } from './author/author.component';
import {RestServices} from './service/rest.services';
import { HttpClientModule } from '@angular/common/http';
import { BookSubscriptionComponent } from './book-subscription/book-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    SidenavComponent,
    HomeComponent,
    StorypageComponent,
    LifestyleComponent,
    FoodComponent,
    TravelComponent,
    BooksComponent,
    DisclaimerComponent,
    PolicyComponent,
    ContactusComponent,
    PopularComponent,
    RecentComponent,
    AuthorComponent,
    BookSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RestServices, StorypageComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
