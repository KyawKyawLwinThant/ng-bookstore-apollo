import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {CartObservableService} from "../service/cart-observable.service";
import {Observable} from "rxjs";
import {Book} from "../book";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cart$:Observable<Book[]> = this.cartService.cart$;
  imgeUrl:string=''

  constructor(private cartService:CartObservableService,
              private router:Router) {
    this.imgeUrl = 'https://cdn-icons-png.flaticon.com/128/1170/1170678.png'
  }

  books!:Book[];


  goToCartView() {
    this.cartService.cart$
      .subscribe(data => this.books = data);
    if(this.books.length > 0) {
      this.router.navigateByUrl("/cart-view");
    }
  }





}
