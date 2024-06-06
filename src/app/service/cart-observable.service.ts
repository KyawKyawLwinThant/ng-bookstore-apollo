import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Book} from "../book";

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {

  #cartSubject:BehaviorSubject<Book[]> =
    new BehaviorSubject<Book[]>([]);
  cart$:Observable<Book[]> = this.#cartSubject.asObservable();

  constructor() { }
  books:Book[]=[];

  addToCart(book:Book):Observable<Book>{
    this.books.push(book);
    this.#cartSubject.next(this.books);
    return of(book);
  }
}
