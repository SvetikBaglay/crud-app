import { OwnerEntity } from "./owner";

export class OwnerData {

  static owners: OwnerEntity[] = [
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
}
