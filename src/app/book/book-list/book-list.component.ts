import {Component, inject} from '@angular/core';
import { Book } from '../../book';
import { Apollo } from 'apollo-angular';
import { GET_ALL_BOOKS } from '../../../graphql/graphql.opertions';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "../book-card/book-card.component";
import {BookService} from "../../service/book.service";
import {Observable} from "rxjs";
import {CartObservableService} from "../../service/cart-observable.service";

@Component({
    selector: 'app-book-list',
    standalone: true,
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.scss',
    imports: [CommonModule, BookCardComponent]
})
export class BookListComponent {

  books:Book[] = []
  book!:Book;

  books$:Observable<Book[]> = this.bookService.books$



  constructor(private bookService:BookService,
              private cartService:CartObservableService){

  }
  addToCart(id:string){
     this.bookService.getBookById(id)
       .subscribe(data => this.book = data);
     this.cartService.addToCart(this.book);
  }

  ngOnInit(): void {

 }





}
