import { Injectable } from '@angular/core';
import { CarEntity, OwnerEntity } from "./owner";
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

  getOwnerById(id: number | null): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.get<OwnerEntity>(url);
  }

  addOwner(ownerEntity: OwnerEntity): Observable<OwnerEntity> {
    return this.http.post<OwnerEntity>(this.ownersUrl, ownerEntity);
  }

  editOwner(ownerParams: { id: number, lastName: string, firstName: string, middleName: string, cars: CarEntity[] }): Observable<Object> {
    const url = `${this.ownersUrl}/${ownerParams.id}`;
    return this.http.put(url, ownerParams);
  }

  deleteOwnerById(id: number): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.delete<OwnerEntity>(url);
  }

}


