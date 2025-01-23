import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../../models/pruebas/persona';
import { Vehicle } from '../../../../models/pruebas/vehiculo';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { bookStock } from '../../../../models/books/bookStock';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule,
    MatTableModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent <T>{
  readonly dialogRef=inject(MatDialogRef<DataTableComponent<T>>);
  public data:T = inject(MAT_DIALOG_DATA);
  public displayedColumns;
  public dataSource = new MatTableDataSource<T>;

  constructor() {
    // Convierte data en un arreglo si no lo es
    const dataArray = Array.isArray(this.data) ? this.data : [this.data];
    this.dataSource = new MatTableDataSource(dataArray);
  
    // Configura las columnas según el tipo
    if (this.isUser(dataArray[0])) {
      this.displayedColumns = ['id', 'firstName', 'lastName'];
    } else if (this.isVehicle(dataArray[0])) {
      this.displayedColumns = ['id', 'brand', 'model', 'year'];
    } else if(this.isBook(dataArray[0])){
      this.displayedColumns = ['title','stock','price','edition'];
    }
  }

  isUser(data: any): data is User {
    return (data as User).firstName !== undefined && (data as User).lastName !== undefined;
  }
    
  isVehicle(data: any): data is Vehicle {
    return (data as Vehicle).brand !== undefined && (data as Vehicle).model !== undefined;
  }

  isBook(data: any): data is bookStock {
      return (data as bookStock).title !== undefined && (data as bookStock).authors !== undefined;
    }

//ver lo ultimo en chat gpt
  closeDialog():void{
    this.dialogRef.close();
  }
}
