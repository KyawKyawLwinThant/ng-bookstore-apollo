import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {BehaviorSubject, map, Observable, of, shareReplay} from "rxjs";
import {Book} from "../book";
import {GET_ALL_BOOKS} from "../../graphql/graphql.opertions";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  #bookSubject:BehaviorSubject<Book[]>=
    new BehaviorSubject<Book[]>([]);
  books$: Observable<Book[]>=this.#bookSubject.asObservable();

  constructor(private apollo: Apollo) {
      this.loadAllBooks()
        .subscribe(data => this.#bookSubject.next(data))
  }

  getBookById(id:String):Observable<Book>{
    return this.books$
      .pipe(
        map(books => books.find(b => b.id === id) as Book)
      ) ;
  }

  loadAllBooks(): Observable<Book[]> {
    return this.apollo.watchQuery<any>({
      query: GET_ALL_BOOKS
    }).valueChanges.pipe(
      shareReplay(),
      map((result) => result.data?.allBooks,
      )
    )

  }


}
