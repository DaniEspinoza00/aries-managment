import { Component, inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { BookListService } from '../../services/bookList/book-list.service';
import { bookList } from '../../models/books/bookList';
import { AsyncPipe } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InventoryTableComponent, AsyncPipe,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})/* private bookListService=inject(BookListService);
  books$:Observable<bookList[]>=this.bookListService.getBookList(); */
export class InventoryComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string [] = ['id', 'title', 'authors', 'edition']; //para el uso de las columnas
  dataSource: MatTableDataSource<bookList>; //para el contenido de la tabla
  books:bookList[]=[];
  private bookListService=inject(BookListService);

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    this.dataSource = new MatTableDataSource<bookList>();
  }

  ngOnInit():void{
    this.getBooks();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBooks(){
    this.bookListService.getBookList().subscribe(
      {
        next:(response)=>{
          this.books=response;
          this.dataSource.data=this.books;
          console.log(this.books);
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
  }

}
