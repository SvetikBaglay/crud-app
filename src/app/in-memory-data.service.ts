import { Injectable } from '@angular/core';
import { OwnerEntity } from "./owner";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const owners = [
      {
        aId: 1,
        aLastName: "Kokos",
        aFirstName: "Svetlana",
        aMiddleName: "Petrovna",
        aCars: [1]
      },
      {
        aId: 2,
        aLastName: "Bahlay",
        aFirstName: "Mariya",
        aMiddleName: "Evgenivna",
        aCars: [3]
      },
      {
        aId: 3,
        aLastName: "Zoro",
        aFirstName: "Nika",
        aMiddleName: "Viktorovna",
        aCars: [2]
      }
    ];
    return { owners }
  }
  genaId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(owner => owner.aId)) + 1 : 1;
  }
}
