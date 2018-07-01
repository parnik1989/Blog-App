import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorypageComponent } from './storypage/storypage.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PolicyComponent } from './policy/policy.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { TravelComponent } from './travel/travel.component';
import { FoodComponent } from './food/food.component';
import { BooksComponent } from './books/books.component';
import { RecentComponent } from './recent/recent.component';
import { PopularComponent } from './popular/popular.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/storypage', component: StorypageComponent },
  { path: 'contatcus' , component: ContactusComponent},
  { path: 'disclaimer' , component: DisclaimerComponent},
  { path: 'policy' , component: PolicyComponent},
  { path: 'lifestyle' , component: LifestyleComponent},
  { path: 'travel' , component: TravelComponent},
  { path: 'food' , component: FoodComponent},
  { path: 'books' , component: BooksComponent},
  { path: 'recent' , component: RecentComponent},
  { path: 'popular' , component: PopularComponent},
  { path: 'authors' , component: AuthorComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
