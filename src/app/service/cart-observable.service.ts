import { Injectable } from '@angular/core';
import {BehaviorSubject, find, map, Observable, of} from "rxjs";
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
    if(!this.duplicateDetected(book)) {
      this.books.push(book);
      this.#cartSubject.next(this.books);
    }
    return of(book);
  }
  private duplicateDetected(book:Book):boolean{
     this.cart$.subscribe(data => this.books = data);
     let isFound = false;
     this.books.forEach( b => {
       if(b.id === book.id){
         isFound = true;
       }
     });
     return isFound;
  }
}
