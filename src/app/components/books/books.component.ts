import { BookListStockService } from './../../services/bookList/book-list-stock/book-list-stock.service';
import { BookListService } from './../../services/bookList/book-list.service';
import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from '../inventory/data-table/table/table.component';
import { bookList } from '../../models/books/bookList';
import { bookStock } from '../../models/books/bookStock';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{
  displayedColumns:string[]=['id', 'title', 'edition', 'stock','price', 'editar'];
  bookList:bookList[]=[];
  bookStock:bookStock[]=[];

  private bookListService=inject(BookListService);
  private bookListStockService=inject(BookListStockService);

  ngOnInit(): void {
    this.getBookForked();
  }

  getBookForked(){
    forkJoin(
      {
      books:this.bookListService.getBookList(),
      stock:this.bookListStockService.getBookStock(),
      }
      ).subscribe({
        next:({books,stock})=>{
          this.bookStock=stock.map(stock=>{
            const bookFoundedByID = books.find(book=>book.id===stock.id)
            
            return { 
              ...stock, 
              image_url:bookFoundedByID?.image_url,  
              title: bookFoundedByID?.title, 
              edition: bookFoundedByID?.edition, 
              authors:bookFoundedByID?.authors
            }
          })
        },
        error:(error)=>{
          console.log(error);
        }
      }
        
    )
  }
}
