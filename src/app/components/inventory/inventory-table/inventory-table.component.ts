import { bookList } from './../../../models/books/bookList';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss'
})
export class InventoryTableComponent{
  book=input.required<bookList>();
}
