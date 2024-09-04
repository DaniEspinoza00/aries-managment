import { bookStock } from './../../models/books/bookStock';
import { BookListStockService } from './../../services/bookList/book-list-stock/book-list-stock.service';
import { Component, inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { BookListService } from '../../services/bookList/book-list.service';
import { bookList } from '../../models/books/bookList';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { forkJoin } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InventoryTableComponent,
     AsyncPipe, 
     MatIconModule,
     MatButtonModule,
     MatFormFieldModule, 
     MatInputModule, 
     MatTableModule, 
     MatSortModule, 
     MatPaginatorModule, 
     MatButtonModule,
     CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})

export class InventoryComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'edition', 'stock','price', 'action']; //para el uso de las columnas
  dataSource: MatTableDataSource<bookStock>; //para el contenido de la tabla

  books: bookList[] = [];
  booksStock: bookStock[] = [];

  private bookListService = inject(BookListService);
  private BookListStockService = inject(BookListStockService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<bookStock>();
  }

  ngOnInit(): void {
    this.getBookListStock();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBookListStock() {
    forkJoin(
      {
        bookList: this.bookListService.getBookList(), //api
        bookStock: this.BookListStockService.getBookStock() //stock
      }
    ).subscribe(
      {
        next: ({ bookList, bookStock }) => { //api-stock
          this.booksStock = bookStock.map(book => { //variable tipo api = parametro tipo api. agarro el primer elemento y ese queda...
            const bookFoundedByID = bookList.find(bL => bL.id === book.id) //stock.find (variable de tipo del stock y busco la coincidencia con el id del libro de la api)
            return { ...book,  title: bookFoundedByID?.title, edition: bookFoundedByID?.edition, authors:bookFoundedByID?.authors} //retorno el libro, y el stock
          }
          )
          this.dataSource.data = this.booksStock; 
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }

  /* price: bookFoundedByID?.price ?? 0 */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
