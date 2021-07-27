export class OwnerEntity {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  cars: CarEntity[];
}

export class CarEntity {
  number: string;
  manufacturer: string;
  model: string;
  year: number
}
