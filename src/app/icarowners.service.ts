import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OwnerEntity } from "./owner";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


// export interface ICarOwnersService {
//   getOwnerById(aId: number): Observable<OwnerEntity>;

//   createOwner(
//   aLastName: string,
//   aFirstName: string,
//   aMiddleName: string,
//   aCars: CarEntity[]
//   ): Observable<OwnerEntity>;

//   editOwner(aOwner: OwnerEntity): Observable<OwnerEntity>;
//   deleteOwner(aOwnerId: number): Observable<OwnerEntity[]>;
//   }

@Injectable({
  providedIn: 'root'
})

export class ICarOwnersService {
  private ownersUrl = 'api/owners';


  constructor(private http: HttpClient) { }

  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.ownersUrl)
      .pipe(
        tap(data => console.log('Owners: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

