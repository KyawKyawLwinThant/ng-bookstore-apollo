import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {map, Observable, of} from "rxjs";
import {Book} from "../book";
import {GET_ALL_BOOKS} from "../../graphql/graphql.opertions";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books$!: Observable<Book[]>;

  constructor(private apollo: Apollo) {
     this.books$ = this.loadAllBooks();
  }

  loadAllBooks(): Observable<Book[]> {
    return this.apollo.watchQuery<any>({
      query: GET_ALL_BOOKS
    }).valueChanges.pipe(
      map((result) => result.data?.allBooks
      )
    )

  }


}
