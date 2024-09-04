import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { bookStock } from '../../../models/books/bookStock';
import { environments } from '../../../../envrionments/environments';

@Injectable({
  providedIn: 'root'
})
export class BookListStockService {

  constructor(private http:HttpClient) { }

  getBookStock():Observable<bookStock[]>{
    return this.http.get<bookStock[]>(environments.bookStock+`booklist`)
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Error detected', error);
    }else{
      console.log('Backend status code', error.status, error.error);
    }
    return throwError(()=> new Error('Something happened, please, try again'));
  }
}
