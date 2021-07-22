import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { OwnerEntity } from '../owner';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: OwnerEntity[] = [];
  selectedId: number | null = null;

  constructor(
    private icarOwnersService: ICarOwnersService,
    private router: Router) { }

  disabled: boolean = false;

  changeEvent(ownerId: number) {
    this.selectedId = ownerId;
  }

   ngOnInit(): void  {
     this.icarOwnersService.getOwners().subscribe(owners => this.owners = owners);
  }
}


