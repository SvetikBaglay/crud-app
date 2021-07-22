import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { CarEntity, OwnerEntity } from '../owner';
import { Location } from '@angular/common';
import { faArrowCircleLeft,faSave, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})

export class OwnerComponent implements OnInit {
  owner: OwnerEntity;
  aCars: CarEntity[] = [];
  faArrowCircleLeft = faArrowCircleLeft;
  faSave = faSave;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  owners: OwnerEntity[] = [];
  disabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private icarOwnersService: ICarOwnersService,
    private location: Location
    ) { }


  goBack(): void  {
    this.location.back();
  }

  save(): void{
    this.icarOwnersService.addOwner(this.owner).subscribe(() => this.goBack());
  }

  addOwnerItem(
    id: number,
    aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]
  ): void {
    console.log('!aLastName: ', !aLastName);
    if (!aLastName || !aMiddleName || !aFirstName || !aCars) {
      this.disabled = true;
    }
    this.icarOwnersService.addOwner({ id, aLastName, aFirstName, aMiddleName, aCars } as OwnerEntity)
      .subscribe(owner => {
        this.owners.push(owner);
      })
  }

  getOwnerByaIdItem(): void {
    const aId = +this.route.snapshot.params.aId;
    this.icarOwnersService.getOwnerById(aId).subscribe((owner) => {
      this.owner = owner;
      this.aCars = this.aCars;
      console.log('aCars: ', this.aCars);

    });
  }

  ngOnInit() {
    this.getOwnerByaIdItem();
  }
}
