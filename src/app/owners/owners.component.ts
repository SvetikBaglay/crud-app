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

  deleteOwner(ownerId: number) {
    //this.owners = this.owners.filter(ow => ow !== owner);
    // console.log('id: ', this.deleteOwner);
   this.icarOwnersService.deleteOwnerById(ownerId).subscribe();
  }

  ngOnInit(): void  {
    this.icarOwnersService.getOwners().subscribe(owners => this.owners = owners);
  }
}


