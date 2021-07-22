import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const owners = [
      {
        id: 1,
        aLastName: "Kokos",
        aFirstName: "Svetlana",
        aMiddleName: "Petrovna",
        aCars: []
      },
      {
        id: 2,
        aLastName: "Bahlay",
        aFirstName: "Mariya",
        aMiddleName: "Evgenivna",
        aCars: []
      },
      {
        id: 3,
        aLastName: "Zoro",
        aFirstName: "Nika",
        aMiddleName: "Viktorovna",
        aCars: []
      }
    ];
    return { owners }
  }
  // genaId(owners: OwnerEntity[]): number {
  //   return owners.length > 0 ? Math.max(...owners.map(owner => owner.aId)) + 1 : 1;
  // }
}
