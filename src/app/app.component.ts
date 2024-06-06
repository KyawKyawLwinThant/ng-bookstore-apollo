import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import {BookService} from "./service/book.service";
import {CartObservableService} from "./service/cart-observable.service";
import {Observable} from "rxjs";
import {Book} from "./book";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, NavbarComponent]
})
export class AppComponent implements OnInit{
  imgeUrl:string;

  cart$:Observable<Book[]> = this.cartService.cart$;

  constructor(private cartService:CartObservableService){
     this.imgeUrl = 'https://cdn-icons-png.flaticon.com/128/1170/1170678.png'
  }

  ngOnInit(): void {

  }



}
