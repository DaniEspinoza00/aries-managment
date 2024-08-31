
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { BookListService } from '../../services/bookList/book-list.service';
import { bookList } from '../../models/books/bookList';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InventoryTableComponent, AsyncPipe],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  private bookListService=inject(BookListService);
  books$:Observable<bookList[]>=this.bookListService.getBookList();
}
