import {Component, DoCheck, OnInit} from '@angular/core';
import {CartObservableService} from "../../service/cart-observable.service";
import {flatMap, map, Observable, of, reduce} from "rxjs";
import {Book} from "../../book";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-book-cart-view',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './book-cart-view.component.html',
  styleUrl: './book-cart-view.component.scss'
})
export class BookCartViewComponent implements OnInit,DoCheck{





  total:number=0;

  constructor(private cartService:CartObservableService) {

  }
  books!:Book[];
  ngOnInit() {
     this.cartService
       .cart$.subscribe(data => this.books
       =data.map(b => ({...b})));
  }

  ngDoCheck() {
    this.books.forEach(bo =>{
      console.log(bo.quantity)
    })
    of(this.books).pipe(
      map(books => books.
      reduce((acc, book) => acc +
        (book.price as number) * (book.quantity as number), 0)),
    ).subscribe(data => this.total = data);
  }


}
