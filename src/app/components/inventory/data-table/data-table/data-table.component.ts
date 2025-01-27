import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { Vehicle } from '../../../../models/pruebas/vehiculo';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { bookStock } from '../../../../models/books/bookStock';
import { saleList } from '../../../../models/sales/saleList';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent <T>{
  readonly dialogRef=inject(MatDialogRef<DataTableComponent<T>>);
  public data:T = inject(MAT_DIALOG_DATA);
  public displayedColumns;
  public dataSource = new MatTableDataSource<T>;
  public bookImage: string = "";
  public title:string="";
  public buttonAction:boolean=false;

  constructor() {
    // Convierte data en un arreglo si no lo es
    const dataArray = Array.isArray(this.data) ? this.data : [this.data];
    this.dataSource = new MatTableDataSource(dataArray);
  
    // Configura las columnas según el tipo
    if (this.isSale(dataArray[0])) {
      this.displayedColumns = ['id_batch', 'fecha', 'totalPrice'];
      this.title="venta";
    } else if (this.isVehicle(dataArray[0])) {
      this.displayedColumns = ['id', 'brand', 'model', 'year'];
      this.title="vehiculo";
    } else if(this.isBook(dataArray[0])){
      this.displayedColumns = ['title','stock','price','edition'];
      this.title="libro";
      this.bookImage = (dataArray[0] as bookStock).image_url || "";
    }
  }

    
  isVehicle(data: any): data is Vehicle {
    return (data as Vehicle).brand !== undefined && (data as Vehicle).model !== undefined;
  }

  isBook(data: any): data is bookStock {
    return (data as bookStock).title !== undefined && (data as bookStock).authors !== undefined;
  }

  isSale(data:any):data is saleList{
    return(data as saleList).id_batch!==undefined && (data as saleList).totalPrice!==undefined;
  }

//ver lo ultimo en chat gpt
  closeDialog():void{
    this.dialogRef.close();
  }

  edit(){
    this.buttonAction=true;
  }
  save(){

  }

}
