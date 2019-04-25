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
  'Bearer 2e331caab6f1c294db190218825e8475c04c9985d48d72985dabe615be01b419';
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
