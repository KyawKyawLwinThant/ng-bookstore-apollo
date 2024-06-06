import {Routes} from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {ErrorComponent} from './error/error.component';
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    path: '', redirectTo: '/books', pathMatch: 'full'
  },
  {
    path: 'books', component: BookListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];
