import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { BookSubscriptionComponent } from './book-subscription/book-subscription.component';
import { BooksToBuyComponent } from './books-to-buy/books-to-buy.component';
import { YoungAdultNovelComponent} from './young-adult-novel/young-adult-novel.component';
import { BachQuotesComponent} from './bach-quotes/bach-quotes.component';
import { NavoneelQuotesComponent} from './navoneel-quotes/navoneel-quotes.component';
import { PauloQuotesComponent} from './paulo-quotes/paulo-quotes.component';
import { AnecdoteSchoolComponent } from './anecdote-school/anecdote-school.component';
import { AnecdoteMovievsbooksComponent } from './anecdote-movievsbooks/anecdote-movievsbooks.component';
import { AnecdoteCollegeComponent } from './anecdote-college/anecdote-college.component';
import { InterCommComponent } from './inter-comm/inter-comm.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
  { path: 'book_sub' , component: BookSubscriptionComponent},
  { path: 'booksToBuy' , component: BooksToBuyComponent},
  { path: 'rech_bach', component: BachQuotesComponent},
  { path: 'kiss_in_rain', component: NavoneelQuotesComponent},
  { path: 'young_adult', component: YoungAdultNovelComponent},
  { path: 'pc', component: PauloQuotesComponent},
  { path: 'anecdoteSchool', component: AnecdoteSchoolComponent},
  { path: 'anecdoteCollege', component: AnecdoteCollegeComponent},
  { path: 'movievsbooks', component: AnecdoteMovievsbooksComponent},
  { path: 'interComm', component: InterCommComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
