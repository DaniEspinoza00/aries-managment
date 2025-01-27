import { Component, inject, OnInit } from '@angular/core';
import { SaleService } from '../../services/sales/sale.service';
import { saleList } from '../../models/sales/saleList';
import { TableComponent } from '../inventory/data-table/table/table.component';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit{

  salesService=inject(SaleService);
  displayedColumns:string[]=['id_batch','fecha','totalPrice','editar'];
  saleList:saleList[]=[];

  ngOnInit(): void {
    this.getSales();
  }

  getSales(){
    this.salesService.getSalesList().subscribe(
      {
        next:(result)=>{
          this.saleList=result;
          console.log(this.saleList);
        }
      }
    )
  }
}
