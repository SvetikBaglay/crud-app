import { Injectable, OnInit } from '@angular/core';
import { OwnerEntity } from "./owner";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ICarOwnersService {
  private ownersUrl = 'api/owners';

  constructor(
    private http: HttpClient) { }


  getOwners(): Observable<OwnerEntity[]> {
    console.log("observable: ", this.getOwners)
    return this.http.get<OwnerEntity[]>(this.ownersUrl)
  }

}

