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
        lastName: "Kokos",
        firstName: "Svetlana",
        middleName: "Petrovna",
        cars: []
      },
      {
        id: 2,
        lastName: "Bahlay",
        firstName: "Mariya",
        middleName: "Evgenivna",
        cars: []
      },
      {
        id: 3,
        lastName: "Zoro",
        firstName: "Nika",
        middleName: "Viktorovna",
        cars: []
      }
    ];
    return { owners }
  }
  // genaId(owners: OwnerEntity[]): number {
  //   return owners.length > 0 ? Math.max(...owners.map(owner => owner.aId)) + 1 : 1;
  // }
}
