import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


// export interface ICarOwnersService {
//   getOwners(): Observable<OwnerEntity[]>;
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

export interface OwnerEntity {
  aId: number;
  aLastName: string;
  aFirstName: string;
  aMiddleName: string;
}

@Injectable({
  providedIn: 'root'
})

export class ICarOwnersService {
  private owners: OwnerEntity[] = [];

 constructor(private http: HttpClient) { }

//  getOwnerById(aId: number): Observable<OwnerEntity>{
//    return
//  }

  getOwners(): OwnerEntity[] {
    if (this.owners.length === 0) {
      this.owners = [
        {
          aId: 1,
          aLastName: "Kokos",
          aFirstName: "Svetlana",
          aMiddleName: "Petrovna"
        },
        {
          aId: 2,
          aLastName: "Bahlay",
          aFirstName: "Mariya",
          aMiddleName: "Evgenivna"
        },
        {
          aId: 3,
          aLastName: "Zoro",
          aFirstName: "Nika",
          aMiddleName: "Viktorovna"
        }
      ];
    }
    return this.owners
  }
}


