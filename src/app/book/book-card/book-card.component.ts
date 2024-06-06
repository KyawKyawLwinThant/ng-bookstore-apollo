import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input()
  book!:Book;

  @Output()
  bookId:EventEmitter<string>=new EventEmitter<string>();

  sendBookIdToParent(id:string|undefined){
    this.bookId.emit(id as string);
  }

}
