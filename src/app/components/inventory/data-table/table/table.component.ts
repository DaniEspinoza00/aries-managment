import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';
import { User } from '../../../../models/pruebas/persona';
import { Vehicle } from '../../../../models/pruebas/vehiculo';
import { bookStock } from '../../../../models/books/bookStock';

@Component({
  selector: 'app-table',
  standalone: true,
    imports: [
       MatIconModule,
       MatButtonModule,
       MatFormFieldModule, 
       MatInputModule, 
       MatTableModule, 
       MatSortModule, 
       MatPaginatorModule, 
       MatButtonModule,
       CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent <T>  implements OnInit, OnChanges, AfterViewInit {
  
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  
  readonly dialog=inject(MatDialog);
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.dataSource.data=this.data();
    console.log(this.data());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnChanges() {
    this.dataSource.data = this.data();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(data:T,enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DataTableComponent, {
      width: '600px',
      data:data,
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose:true
    });
  }
}
