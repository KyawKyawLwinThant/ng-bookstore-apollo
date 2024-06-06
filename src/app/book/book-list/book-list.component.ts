import { Component } from '@angular/core';
import { Book } from '../../book';
import { Apollo } from 'apollo-angular';
import { GET_ALL_BOOKS } from '../../../graphql/graphql.opertions';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "../book-card/book-card.component";

@Component({
    selector: 'app-book-list',
    standalone: true,
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.scss',
    imports: [CommonModule, BookCardComponent]
})
export class BookListComponent {

  books:Book[] = []

  constructor(private apollo:Apollo){

  }

  ngOnInit(): void {
    this.loadAllBooks();
 }

 loadAllBooks(){
   this.apollo.watchQuery<any>({
     query:GET_ALL_BOOKS
   })
   .valueChanges.subscribe({
     next: result => this.books = result.data?.allBooks,
     error: error => console.log(error),
     complete: () => console.log("Completed!")
   })
 }

}
