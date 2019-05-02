import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IShot } from '../models/shot';

const baseUrl = 'https://api.dribbble.com/v2';
const token =
  'Bearer 2af6145703e4530b1af77e531717340f262fd1787add034a8216cadf8885046f';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: token
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShotService {
  constructor(private http: HttpClient) {}

  list(): Observable<IShot[]> {
    return this.http.get<IShot[]>(`${baseUrl}/user/shots`, httpOptions).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  find(id: number): Observable<IShot[]> {
    return this.http.get<IShot[]>(`${baseUrl}/shots/${id}`, httpOptions).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  like(id: number): Observable<IShot[]> {
    return this.http
      .post<IShot[]>(`${baseUrl}/shots/${id}/like`, null, httpOptions)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      );
  }

  unlike(id: number): Observable<IShot[]> {
    return this.http
      .delete<IShot[]>(`${baseUrl}/shots/${id}/like`, httpOptions)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
