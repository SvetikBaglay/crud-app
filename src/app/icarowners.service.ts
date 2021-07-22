import { Injectable } from '@angular/core';
import { OwnerEntity } from "./owner";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  addOwner(OwnerEntity: OwnerEntity): Observable<OwnerEntity> {
    return this.http.post<OwnerEntity>(this.ownersUrl, OwnerEntity);
  }

}


