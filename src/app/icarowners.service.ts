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
    return this.http.get<OwnerEntity[]>(this.ownersUrl);
  }

  getOwnerById(aId: number | null): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${aId}`;
    return this.http.get<OwnerEntity>(url);
  }

}

