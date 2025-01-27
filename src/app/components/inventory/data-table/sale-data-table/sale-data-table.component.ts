import { SaleService } from './../../../../services/sales/sale.service';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { sale } from '../../../../models/sales/sale';

@Component({
  selector: 'app-sale-data-table',
  standalone: true,
  imports: [CommonModule,
      MatTableModule],
  templateUrl: './sale-data-table.component.html',
  styleUrl: './sale-data-table.component.scss'
})
export class SaleDataTableComponent implements OnInit{
  //ver como se hizo la primera vez y ver como esta DataTableComponent
  //ver la ultima consulta en MySQL
  readonly dialogRef=inject(MatDialogRef<SaleDataTableComponent>)
  displayedColumns:string[]=[];
  dataSource = new MatTableDataSource<sale>();//cambia el tipo de dato
  public data:number=inject(MAT_DIALOG_DATA);//cambia el tipo de dato

  private saleService=inject(SaleService);

  ngOnInit(): void {
    
  }
  
  constructor(private cdr:ChangeDetectorRef){
    this.displayedColumns=['idBook','quantity','subtotal','idUser'];
    
    this.saleService.getSaleByBatchid(this.data).subscribe((sale: sale[]) => {
      this.dataSource = new MatTableDataSource(sale); // Asignas los datos al dataSource
      this.cdr.detectChanges(); // Forzar la detección de cambios
    });
  }
  
  closeDialog():void{
    this.dialogRef.close();
  }
}
