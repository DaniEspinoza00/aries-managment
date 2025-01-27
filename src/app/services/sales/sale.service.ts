import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../envrionments/environments';
import { saleList } from '../../models/sales/saleList';
import { sale } from '../../models/sales/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http:HttpClient) { }

  //listar todas las ventas
  getSalesList():Observable<saleList[]>{
    return this.http.get<saleList[]>(environments.bookStock+'sales');
  }

  getSaleByBatchid(id:number):Observable<sale[]>{
    return this.http.get<sale[]>(environments.bookStock+'sales/'+id);
  }
}
