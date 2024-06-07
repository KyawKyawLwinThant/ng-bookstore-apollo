import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCartViewComponent } from './book-cart-view.component';

describe('BookCartViewComponent', () => {
  let component: BookCartViewComponent;
  let fixture: ComponentFixture<BookCartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCartViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
