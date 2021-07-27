import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { faArrowCircleLeft,faSave, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Validators } from '@angular/forms';
import { CarEntity } from '../owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})

export class OwnerComponent implements OnInit {
  ownerForm = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleName: ['', Validators.required],
    cars: this.fb.array([])
  });

  faArrowCircleLeft = faArrowCircleLeft;
  faSave = faSave;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private icarOwnersService: ICarOwnersService
    ) { }

  goBack(): void  {
    this.router.navigate(['/owners'])
  }

  newCarGroup(car?: CarEntity) {
    if (car) {
      return this.fb.group({ number: car.number, manufacturer: car.manufacturer, model: car.model, year: car.year });
    }

    return this.fb.group({ number: ['', Validators.required], manufacturer: ['', Validators.required], model: ['', Validators.required], year: ['', Validators.required] });
  }

  get cars() {
    return this.ownerForm.get('cars') as FormArray;
  }

  onSubmit() {
    this.icarOwnersService.editOwner(this.ownerForm.value).subscribe(() => this.goBack());
  }

  addCar() {
    this.cars.push(this.newCarGroup());
  };

  removeCar(index: number) {
    this.cars.removeAt(index);
  }

  getOwnerByIdItem(): void {
    const id = +this.route.snapshot.params.id;
    this.icarOwnersService.getOwnerById(id).subscribe((owner) => {
      console.log('owner: ', owner);

      this.ownerForm.patchValue(
        {
          id: owner.id,
          firstName: owner.firstName,
          lastName: owner.lastName,
          middleName: owner.middleName,
        }
      )

      owner.cars.forEach((car) => this.cars.push(this.newCarGroup(car)));

    });
  }

  ngOnInit() {
    this.getOwnerByIdItem();
  }
}
