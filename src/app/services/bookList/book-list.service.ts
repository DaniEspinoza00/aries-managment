import { environments } from './../../../envrionments/environments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookList } from '../../models/books/bookList';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookListService {

  private limit:string='/books?_limit=100';

  constructor(private http:HttpClient) { }

  getBookList():Observable<bookList[]>{
    return this.http.get<bookList[]>(environments.baseUrl+this.limit)
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Error detected', error.error);
    }else{
      console.log('Backend status code', error.status, error.error);
    }
    return throwError(()=>new Error('Something happened, please, try again'));
  }
}
