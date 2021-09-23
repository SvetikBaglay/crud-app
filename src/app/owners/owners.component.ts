import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarOwnersService } from '../icarowners.service';
import { CarEntity, OwnerEntity } from '../owner';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: OwnerEntity[] = [];
  selectedId: number;


  constructor(
    private icarOwnersService: ICarOwnersService,
    private router: Router,
    private http: HttpClient) { }

  disabled: boolean = false;

  changeEvent(id: number) {
    this.selectedId = id;
  }

  deleteOwner(selectedId: number) {
    let ownersWithoutDeleteOwner = [];
    for (let i = 0; i < this.owners.length; i++) {
      if (this.owners[i].id != selectedId ) {
        ownersWithoutDeleteOwner.push(this.owners[i])
      }
    }
    this.owners = ownersWithoutDeleteOwner
   this.icarOwnersService.deleteOwnerById(selectedId).subscribe();
  }

  ngOnInit(): void  {
    this.icarOwnersService.getOwners().subscribe(owners => this.owners = owners);
  }
}
