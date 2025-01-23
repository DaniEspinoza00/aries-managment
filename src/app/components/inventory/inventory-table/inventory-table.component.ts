import { CommonModule, NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { bookStock } from '../../../models/books/bookStock';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatDialogActions, MatDialogContent, MatIconModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InventoryTableComponent{

  displayedColumns: string[] = ['title', 'stock', 'price', 'edition']; // Agrega las columnas que deseas mostrar //para el uso de las columnas
  dataSource: MatTableDataSource<bookStock>; //para el contenido de la tabla
  input:boolean=false;

  public data = inject(MAT_DIALOG_DATA);
  private data2 = JSON.parse(JSON.stringify(this.data));
  
  readonly dialogRef = inject(MatDialogRef<InventoryTableComponent>);

  constructor(private cdr:ChangeDetectorRef){
    this.dataSource=new MatTableDataSource([this.data])
  }

  close(){
    this.dialogRef.close(false);
  }

  edit(){
    this.input=!this.input;
    this.cdr.detectChanges();
  }

  save(){//resolver alertas para confirmar
    Swal.fire({
      title:"Do you want to save the changes?",
      icon:"question",
      showCancelButton:true,
      confirmButtonColor:"#EB5E28",
      cancelButtonColor:"d33",
      confirmButtonText:"Yes"
    }).then((result)=>{
      console.log(result.isConfirmed);
      if(result.isConfirmed){
        console.log(this.data);
        this.dialogRef.close(this.data);
        this.cdr.detectChanges();
      }
    })
  }
}
